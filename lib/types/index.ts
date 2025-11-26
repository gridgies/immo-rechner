// Input parameters from user
export interface InvestmentInputs {
  kaufpreis: number;
  wohnflaeche: number;
  nebenkostenProzent: number; // e.g., 0.1157 for 11.57%
  eigenkapitalProzent: number; // e.g., 0.2 for 20%
  eigenkapitalAbsolut?: number; // Optional: absolute eigenkapital value (overrides percentage)
  zinssatz: number; // p.a., e.g., 0.035 for 3.5%
  tilgung: number; // p.a., e.g., 0.01 for 1%
  monatlicheKaltmiete: number;
  wohngeldUmlegbar: number; // monthly
  wohngeldNichtUmlegbar: number; // monthly
  haltedauer: 10 | 20 | 30; // years
  wertsteigerungProzent: number; // e.g., 1.5 for 150% increase (2.5x)
  mieterhoehungen: Mieterhoehung[];
}

export interface Mieterhoehung {
  nachMonaten: number; // e.g., 12, 24, 36
  prozent: number; // e.g., 0.15 for 15%
}

// Monthly calculation row
export interface MonthlyCalculation {
  period: number; // month number (1-360)
  date: Date;
  anfangsschuld: number;
  zinsen: number;
  tilgung: number;
  annuitaet: number;
  restschuld: number;
  vermoegensZuwachs: number;
  mieteinnahmen: number;
  wohngeldNichtUmlegbar: number;
  cashflow: number;
  cashflowMonthly: number;
  currentRent: number; // tracking current rent after increases
}

// Summary results
export interface InvestmentSummary {
  gesamtkosten: number;
  finanzierung: number;
  eigenkapital: number;
  erstjahrCashflowPA: number;
  erstjahrCashflowPM: number;
  vermoegensZuwachs: number;
  irr: number;
  totalCashflow: number;
  finalPropertyValue: number;
  restschuldEnde: number; // Restschuld at end of holding period
}

// Complete calculation result
export interface CalculationResult {
  inputs: InvestmentInputs;
  monthly: MonthlyCalculation[];
  summary: InvestmentSummary;
}
