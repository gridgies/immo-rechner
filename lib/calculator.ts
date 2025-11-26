import {
  InvestmentInputs,
  MonthlyCalculation,
  InvestmentSummary,
  CalculationResult,
} from './types';

/**
 * Main calculation engine for real estate investment analysis
 * Based on Excel model from Wohnungsanalysen_for_Claude.xlsx
 */
export function calculateInvestment(inputs: InvestmentInputs): CalculationResult {
  // Basic calculations
  const kaufnebenkosten = inputs.kaufpreis * inputs.nebenkostenProzent;
  const gesamtkosten = inputs.kaufpreis + kaufnebenkosten;
  const finanzierung = inputs.kaufpreis * (1 - inputs.eigenkapitalProzent);
  const eigenkapital = inputs.kaufpreis * inputs.eigenkapitalProzent + kaufnebenkosten;

  // Calculate monthly payments
  const totalMonths = inputs.haltedauer * 12;
  const monthly: MonthlyCalculation[] = [];

  // Initial state (Month 0 - setup)
  let currentDebt = finanzierung;
  let currentRent = inputs.monatlicheKaltmiete;
  const startDate = new Date();

  // Month 0 initial investment (negative cashflow)
  const initialCashflow = -eigenkapital;

  // Calculate CONSTANT monthly annuity (same payment every month)
  const annuitaet = finanzierung * ((inputs.zinssatz + inputs.tilgung) / 12);

  // Calculate each month
  for (let month = 1; month <= totalMonths; month++) {
    const date = new Date(startDate);
    date.setMonth(date.getMonth() + month);

    // Check if there's a rent increase this month
    const rentIncrease = inputs.mieterhoehungen.find(
      (m) => m.nachMonaten === month
    );
    if (rentIncrease) {
      currentRent = currentRent * (1 + rentIncrease.prozent);
    }

    // Monthly interest and amortization (annuity is CONSTANT)
    const zinsenMonthly = currentDebt * (inputs.zinssatz / 12);
    const tilgungMonthly = annuitaet - zinsenMonthly;
    const restschuld = currentDebt - tilgungMonthly;

    // Cash flows
    const mieteinnahmen = currentRent;
    const wohngeldNichtUmlegbar = inputs.wohngeldNichtUmlegbar;
    const cashflow = mieteinnahmen - annuitaet - wohngeldNichtUmlegbar;

    // Vermögenszuwachs (equity buildup)
    const vermoegensZuwachs = tilgungMonthly + cashflow;

    monthly.push({
      period: month,
      date,
      anfangsschuld: currentDebt,
      zinsen: zinsenMonthly,
      tilgung: tilgungMonthly,
      annuitaet,
      restschuld,
      vermoegensZuwachs,
      mieteinnahmen,
      wohngeldNichtUmlegbar,
      cashflow,
      cashflowMonthly: cashflow,
      currentRent,
    });

    // Update for next month
    currentDebt = restschuld;
  }

  // Final month: Add property sale
  const lastMonth = monthly[monthly.length - 1];
  const finalPropertyValue = inputs.kaufpreis * (1 + inputs.wertsteigerungProzent);
  const saleProceeds = finalPropertyValue - lastMonth.restschuld;
  
  // Update last month's cashflow to include sale
  lastMonth.cashflow = lastMonth.cashflow + saleProceeds;

  // Add initial investment as Month 0
  const month0: MonthlyCalculation = {
    period: 0,
    date: startDate,
    anfangsschuld: 0,
    zinsen: 0,
    tilgung: 0,
    annuitaet: 0,
    restschuld: finanzierung,
    vermoegensZuwachs: 0,
    mieteinnahmen: 0,
    wohngeldNichtUmlegbar: 0,
    cashflow: initialCashflow,
    cashflowMonthly: initialCashflow,
    currentRent: 0,
  };

  // Insert Month 0 at the beginning
  monthly.unshift(month0);

  // Calculate summary metrics
  const erstjahrCashflowPA = monthly
    .slice(1, 13) // Skip month 0
    .reduce((sum, m) => sum + m.cashflow, 0);
  const erstjahrCashflowPM = erstjahrCashflowPA / 12;

  // Vermögenszuwachs = Total of ALL cashflows (including Month 0 and final sale)
  const totalCashflow = monthly.reduce((sum, m) => sum + m.cashflow, 0);
  const vermoegensZuwachs = totalCashflow; // This is the true wealth accumulation

  // Calculate IRR (Internal Rate of Return)
  const irr = calculateIRR(monthly);

  // Get final restschuld (last month's remaining debt)
  const restschuldEnde = monthly[monthly.length - 1].restschuld;

  const summary: InvestmentSummary = {
    gesamtkosten,
    finanzierung,
    eigenkapital,
    erstjahrCashflowPA,
    erstjahrCashflowPM,
    vermoegensZuwachs,
    irr,
    totalCashflow,
    finalPropertyValue,
    restschuldEnde,
  };

  return {
    inputs,
    monthly,
    summary,
  };
}

/**
 * Calculate Internal Rate of Return using Newton-Raphson method
 * This calculates the ANNUAL IRR based on monthly cashflows
 * Formula: 0 = C0 + C1/(1+r)^(1/12) + C2/(1+r)^(2/12) + ... + Cn/(1+r)^(n/12)
 * Where r is the annual IRR we're solving for
 */
function calculateIRR(monthly: MonthlyCalculation[]): number {
  // Build array of all cashflows from monthly calculations
  const cashflows: number[] = monthly.map(m => m.cashflow);

  // Newton-Raphson iteration to find annual IRR
  let rate = 0.1; // Initial guess: 10% annual
  const maxIterations = 100;
  const tolerance = 0.0000001;

  for (let i = 0; i < maxIterations; i++) {
    let npv = 0;
    let dnpv = 0;

    // Calculate NPV and its derivative
    cashflows.forEach((cf, period) => {
      if (period === 0) {
        // Initial investment at time 0
        npv += cf;
      } else {
        // Monthly cashflows - discount using annual rate converted to monthly periods
        // Each month is period/12 years
        const years = period / 12;
        const discountFactor = Math.pow(1 + rate, years);
        npv += cf / discountFactor;
        // Derivative: d/dr of cf / (1+r)^years
        dnpv -= (years * cf) / (discountFactor * (1 + rate));
      }
    });

    // Newton-Raphson: new_rate = old_rate - f(rate)/f'(rate)
    const newRate = rate - npv / dnpv;

    // Check convergence
    if (Math.abs(newRate - rate) < tolerance) {
      return newRate;
    }

    rate = newRate;

    // Safety check for divergence
    if (Math.abs(rate) > 10 || isNaN(rate)) {
      // If diverging, try different initial guess
      if (i < 10) {
        rate = 0.05 * (i + 1); // Try 5%, 10%, 15%, etc.
      } else {
        return 0; // Return 0 if we can't converge
      }
    }
  }

  return rate; // Return best estimate if not converged
}

/**
 * Helper function to aggregate monthly data into annual summaries
 */
export function aggregateToAnnual(monthly: MonthlyCalculation[]): MonthlyCalculation[] {
  const annual: MonthlyCalculation[] = [];

  // Keep Month 0 (initial investment) as is
  if (monthly.length > 0 && monthly[0].period === 0) {
    annual.push(monthly[0]);
  }

  // Start aggregating from month 1
  const startIdx = monthly[0]?.period === 0 ? 1 : 0;
  
  for (let year = 0; year < (monthly.length - startIdx) / 12; year++) {
    const monthStartIdx = startIdx + year * 12;
    const monthEndIdx = Math.min(monthStartIdx + 12, monthly.length);
    const yearMonths = monthly.slice(monthStartIdx, monthEndIdx);

    if (yearMonths.length === 0) break;

    const lastMonth = yearMonths[yearMonths.length - 1];

    annual.push({
      period: year + 1,
      date: lastMonth.date,
      anfangsschuld: yearMonths[0].anfangsschuld,
      zinsen: yearMonths.reduce((sum, m) => sum + m.zinsen, 0),
      tilgung: yearMonths.reduce((sum, m) => sum + m.tilgung, 0),
      annuitaet: yearMonths.reduce((sum, m) => sum + m.annuitaet, 0),
      restschuld: lastMonth.restschuld,
      vermoegensZuwachs: yearMonths.reduce((sum, m) => sum + m.vermoegensZuwachs, 0),
      mieteinnahmen: yearMonths.reduce((sum, m) => sum + m.mieteinnahmen, 0),
      wohngeldNichtUmlegbar: yearMonths.reduce((sum, m) => sum + m.wohngeldNichtUmlegbar, 0),
      cashflow: yearMonths.reduce((sum, m) => sum + m.cashflow, 0),
      cashflowMonthly: yearMonths.reduce((sum, m) => sum + m.cashflow, 0) / 12,
      currentRent: lastMonth.currentRent,
    });
  }

  return annual;
}
