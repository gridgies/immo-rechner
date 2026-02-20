// Database types matching Supabase schema

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string | null;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string | null;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
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
          eigenkapital_absolut?: number;
          eigenkapital_source?: 'prozent' | 'absolut';
          zinssatz: number;
          tilgung: number;
          monatliche_kaltmiete: number;
          wohngeld_umlegbar?: number;
          wohngeld_nicht_umlegbar?: number;
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
    };
  };
}

// Profile type
export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

// Scenario type
export interface Scenario {
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
}

// Alias for backwards compatibility
export type ScenarioWithMieterhoehungen = Scenario;
