// Database types matching Supabase schema

export interface Database {
  public: {
    Tables: {
      scenarios: {
        Row: {
          id: string;
          user_id: string;
          name: string;
          kaufpreis: number;
          wohnflaeche: number | null;
          flaeche: number | null;
          nebenkosten_prozent: number;
          eigenkapital_prozent: number;
          eigenkapital_absolut: number;
          eigenkapital_source: 'prozent' | 'absolut';
          zinssatz: number;
          tilgung: number;
          monatliche_kaltmiete: number;
          wohngeld_umlegbar: number;
          wohngeld_nicht_umlegbar: number;
          haltedauer: 10 | 20 | 30;
          wertsteigerung_prozent: number;
          miet_steigerung_prozent: number;
          hausgeld_steigerung_prozent: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          name: string;
          kaufpreis: number;
          wohnflaeche?: number | null;
          flaeche?: number | null;
          nebenkosten_prozent: number;
          eigenkapital_prozent: number;
          eigenkapital_absolut: number;
          eigenkapital_source: 'prozent' | 'absolut';
          zinssatz: number;
          tilgung: number;
          monatliche_kaltmiete: number;
          wohngeld_umlegbar: number;
          wohngeld_nicht_umlegbar: number;
          haltedauer: 10 | 20 | 30;
          wertsteigerung_prozent: number;
          miet_steigerung_prozent?: number;
          hausgeld_steigerung_prozent?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          name?: string;
          kaufpreis?: number;
          wohnflaeche?: number | null;
          flaeche?: number | null;
          nebenkosten_prozent?: number;
          eigenkapital_prozent?: number;
          eigenkapital_absolut?: number;
          eigenkapital_source?: 'prozent' | 'absolut';
          zinssatz?: number;
          tilgung?: number;
          monatliche_kaltmiete?: number;
          wohngeld_umlegbar?: number;
          wohngeld_nicht_umlegbar?: number;
          haltedauer?: 10 | 20 | 30;
          wertsteigerung_prozent?: number;
          miet_steigerung_prozent?: number;
          hausgeld_steigerung_prozent?: number;
          created_at?: string;
          updated_at?: string;
        };
      };
      // Legacy table - kept for backwards compatibility but no longer used
      mieterhoehungen: {
        Row: {
          id: string;
          scenario_id: string;
          nach_monaten: number;
          prozent: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          scenario_id: string;
          nach_monaten: number;
          prozent: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          scenario_id?: string;
          nach_monaten?: number;
          prozent?: number;
          created_at?: string;
        };
      };
    };
  };
}

// Scenario type (simplified - no longer includes mieterhoehungen array)
export interface ScenarioWithMieterhoehungen {
  id: string;
  user_id: string;
  name: string;
  kaufpreis: number;
  wohnflaeche: number | null;
  flaeche: number | null;
  nebenkosten_prozent: number;
  eigenkapital_prozent: number;
  eigenkapital_absolut: number;
  eigenkapital_source: 'prozent' | 'absolut';
  zinssatz: number;
  tilgung: number;
  monatliche_kaltmiete: number;
  wohngeld_umlegbar: number;
  wohngeld_nicht_umlegbar: number;
  haltedauer: 10 | 20 | 30;
  wertsteigerung_prozent: number;
  miet_steigerung_prozent: number;
  hausgeld_steigerung_prozent: number;
  created_at: string;
  updated_at: string;
  // Legacy field - kept for backwards compatibility
  mieterhoehungen?: {
    id: string;
    nach_monaten: number;
    prozent: number;
  }[];
}
