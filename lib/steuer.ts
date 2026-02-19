// lib/steuer.ts
// German tax calculation for rental property investments

export interface SteuerInputs {
  kaufpreis: number;
  grundstuecksanteil: number; // percentage of land value (not depreciable), e.g. 0.20 for 20%
  baujahr: number; // year built, determines AfA rate
  monatlicheKaltmiete: number;
  wohngeldNichtUmlegbar: number; // monthly non-recoverable costs
  zinsenJaehrlich: number; // annual interest payments
  persoenlicheSteuersatz: number; // personal income tax rate, e.g. 0.42 for 42%
  haltedauer: number; // years
  mietSteigerung: number; // annual rent increase rate
  hausgeldSteigerung: number; // annual cost increase rate
}

export interface SteuerResult {
  afaSatz: number; // annual depreciation rate
  afaJaehrlich: number; // annual depreciation amount
  afaBasis: number; // depreciable building value (Kaufpreis - Grundstücksanteil)
  steuerersparnisJahr1: number; // tax saving in first year
  steuerersparnisGesamt: number; // total tax savings over holding period
  zuVersteuerndesEinkommenJahr1: number; // taxable income year 1
  cashflowNachSteuerJahr1PM: number; // monthly cashflow after tax year 1
  jahresDetails: SteuerJahr[];
}

export interface SteuerJahr {
  jahr: number;
  mieteinnahmenJahr: number;
  werbungskosten: number; // deductible expenses
  zinsen: number;
  afa: number;
  nichtUmlegbaresHausgeld: number;
  zuVersteuerndesEinkommen: number;
  steuereffekt: number; // positive = tax saving, negative = tax payment
  cashflowNachSteuer: number;
}

export function calculateSteuer(inputs: SteuerInputs): SteuerResult {
  // Determine AfA rate based on construction year
  let afaSatz: number;
  if (inputs.baujahr >= 2023) {
    afaSatz = 0.03; // 3% for buildings completed from 2023
  } else if (inputs.baujahr > 1924) {
    afaSatz = 0.02; // 2% for buildings completed after 31.12.1924
  } else {
    afaSatz = 0.025; // 2.5% for buildings completed before 01.01.1925
  }

  // AfA basis = purchase price minus land value (Grundstücksanteil is not depreciable)
  const afaBasis = inputs.kaufpreis * (1 - inputs.grundstuecksanteil);
  const afaJaehrlich = afaBasis * afaSatz;

  // Maximum AfA years
  const maxAfaJahre = Math.round(1 / afaSatz);

  const jahresDetails: SteuerJahr[] = [];
  let steuerersparnisGesamt = 0;
  let currentMiete = inputs.monatlicheKaltmiete;
  let currentHausgeld = inputs.wohngeldNichtUmlegbar;

  // We need annual interest — approximate by using initial value
  // In a full integration, this would come from the main calculator
  let currentZinsen = inputs.zinsenJaehrlich;

  for (let jahr = 1; jahr <= inputs.haltedauer; jahr++) {
    // Apply annual increases from year 2
    if (jahr > 1) {
      currentMiete *= (1 + inputs.mietSteigerung);
      currentHausgeld *= (1 + inputs.hausgeldSteigerung);
      // Interest decreases over time (simplified: ~2% less per year as principal is paid down)
      currentZinsen *= 0.97;
    }

    const mieteinnahmenJahr = currentMiete * 12;
    const nichtUmlegbaresHausgeldJahr = currentHausgeld * 12;
    const afa = jahr <= maxAfaJahre ? afaJaehrlich : 0;

    // Werbungskosten (deductible expenses)
    const werbungskosten = currentZinsen + afa + nichtUmlegbaresHausgeldJahr;

    // Zu versteuerndes Einkommen from this property
    const zuVersteuerndesEinkommen = mieteinnahmenJahr - werbungskosten;

    // Tax effect (negative zuVersteuerndesEinkommen = tax saving)
    const steuereffekt = -zuVersteuerndesEinkommen * inputs.persoenlicheSteuersatz;

    // Cashflow after tax = Rental income - non-deductible costs - interest - principal + tax effect
    // Note: principal repayment is not tax-deductible but affects cashflow
    // Here we only calculate the tax component
    const cashflowNachSteuer = mieteinnahmenJahr - nichtUmlegbaresHausgeldJahr + steuereffekt;

    steuerersparnisGesamt += Math.max(0, steuereffekt);

    jahresDetails.push({
      jahr,
      mieteinnahmenJahr,
      werbungskosten,
      zinsen: currentZinsen,
      afa,
      nichtUmlegbaresHausgeld: nichtUmlegbaresHausgeldJahr,
      zuVersteuerndesEinkommen,
      steuereffekt,
      cashflowNachSteuer,
    });
  }

  const jahr1 = jahresDetails[0];

  return {
    afaSatz,
    afaJaehrlich,
    afaBasis,
    steuerersparnisJahr1: Math.max(0, jahr1?.steuereffekt || 0),
    steuerersparnisGesamt,
    zuVersteuerndesEinkommenJahr1: jahr1?.zuVersteuerndesEinkommen || 0,
    cashflowNachSteuerJahr1PM: (jahr1?.cashflowNachSteuer || 0) / 12,
    jahresDetails,
  };
}

// Common tax rates in Germany for quick selection
export const STEUERSAETZE = [
  { label: 'Niedrig (25%)', value: 0.25 },
  { label: 'Mittel (35%)', value: 0.35 },
  { label: 'Hoch (42%)', value: 0.42 },
  { label: 'Spitzensteuersatz (45%)', value: 0.45 },
];

// Typical land value percentages
export const GRUNDSTUECKSANTEILE = [
  { label: 'Stadtzentrum (~30%)', value: 0.30 },
  { label: 'Stadtrand (~20%)', value: 0.20 },
  { label: 'Ländlich (~15%)', value: 0.15 },
];
