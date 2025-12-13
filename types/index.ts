// Legacy type - kept for backwards compatibility
export interface Mieterhoehung {
  nach_monaten: number;
  prozent: number;
}

export interface ScenarioInput {
  name: string;
  kaufpreis: number;
  wohnflaeche: number;
  nebenkosten_prozent: number;
  eigenkapital_prozent: number;
  zinssatz: number;
  tilgung: number;
  monatliche_kaltmiete: number;
  wohngeld_umlegbar: number;
  wohngeld_nicht_umlegbar: number;
  haltedauer: 10 | 20 | 30;
  wertsteigerung_prozent: number;
  miet_steigerung_prozent: number;
  hausgeld_steigerung_prozent: number;
  // Legacy - kept for backwards compatibility
  mieterhoehungen?: Mieterhoehung[];
}

export interface MonthlyData {
  monat: number;
  datum: Date;
  anfangsschuld: number;
  zinsen: number;
  tilgung: number;
  annuitaet: number;
  restschuld: number;
  vermoegenszuwachs: number;
  mieteinnahmen: number;
  hausgeld_nicht_umlegbar: number;
  cashflow: number;
}

export interface AnnualData {
  jahr: number;
  zinsen: number;
  tilgung: number;
  restschuld: number;
  mieteinnahmen: number;
  cashflow: number;
}

export interface CalculationResult {
  monthlyData: MonthlyData[];
  annualData: AnnualData[];
  irr: number;
  gesamtcashflow: number;
  vermoegenszuwachs: number;
}
