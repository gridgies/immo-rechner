-- Immobilien Rechner Database Schema
-- Run this in your Supabase SQL Editor

-- Enable Row Level Security
ALTER TABLE IF EXISTS public.scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.mieterhoehungen ENABLE ROW LEVEL SECURITY;

-- Drop existing tables if they exist (for clean setup)
DROP TABLE IF EXISTS public.mieterhoehungen CASCADE;
DROP TABLE IF EXISTS public.scenarios CASCADE;

-- Scenarios table
CREATE TABLE public.scenarios (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  
  -- Input parameters
  kaufpreis NUMERIC NOT NULL,
  wohnflaeche NUMERIC NOT NULL,
  nebenkosten_prozent NUMERIC NOT NULL,
  eigenkapital_prozent NUMERIC NOT NULL,
  zinssatz NUMERIC NOT NULL,
  tilgung NUMERIC NOT NULL,
  monatliche_kaltmiete NUMERIC NOT NULL,
  wohngeld_umlegbar NUMERIC NOT NULL,
  wohngeld_nicht_umlegbar NUMERIC NOT NULL,
  haltedauer INTEGER NOT NULL CHECK (haltedauer IN (10, 20, 30)),
  wertsteigerung_prozent NUMERIC NOT NULL,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Mieterhöhungen table (rent increases)
CREATE TABLE public.mieterhoehungen (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  scenario_id UUID REFERENCES public.scenarios(id) ON DELETE CASCADE NOT NULL,
  nach_monaten INTEGER NOT NULL,
  prozent NUMERIC NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Indexes for better query performance
CREATE INDEX scenarios_user_id_idx ON public.scenarios(user_id);
CREATE INDEX scenarios_created_at_idx ON public.scenarios(created_at DESC);
CREATE INDEX mieterhoehungen_scenario_id_idx ON public.mieterhoehungen(scenario_id);

-- Row Level Security Policies

-- Scenarios: Users can only see/edit their own scenarios
CREATE POLICY "Users can view their own scenarios"
  ON public.scenarios
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own scenarios"
  ON public.scenarios
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own scenarios"
  ON public.scenarios
  FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own scenarios"
  ON public.scenarios
  FOR DELETE
  USING (auth.uid() = user_id);

-- Mieterhöhungen: Users can only see/edit rent increases for their own scenarios
CREATE POLICY "Users can view rent increases for their scenarios"
  ON public.mieterhoehungen
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.scenarios
      WHERE scenarios.id = mieterhoehungen.scenario_id
      AND scenarios.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can insert rent increases for their scenarios"
  ON public.mieterhoehungen
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.scenarios
      WHERE scenarios.id = mieterhoehungen.scenario_id
      AND scenarios.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can update rent increases for their scenarios"
  ON public.mieterhoehungen
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.scenarios
      WHERE scenarios.id = mieterhoehungen.scenario_id
      AND scenarios.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete rent increases for their scenarios"
  ON public.mieterhoehungen
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.scenarios
      WHERE scenarios.id = mieterhoehungen.scenario_id
      AND scenarios.user_id = auth.uid()
    )
  );

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to call the function
CREATE TRIGGER update_scenarios_updated_at
    BEFORE UPDATE ON public.scenarios
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
