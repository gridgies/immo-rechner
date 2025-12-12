'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';
import { ScenarioWithMieterhoehungen } from '@/lib/types/database';
import { InvestmentInputs, Mieterhoehung } from '@/lib/types';

interface SavedScenariosProps {
  onLoadScenario: (inputs: InvestmentInputs, scenarioId?: string, scenarioName?: string) => void;
  currentUserId: string;
}

export default function SavedScenarios({
  onLoadScenario,
  currentUserId,
}: SavedScenariosProps) {
  const [scenarios, setScenarios] = useState<ScenarioWithMieterhoehungen[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient();

  const loadScenarios = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data: scenariosData, error: scenariosError } = await supabase
        .from('scenarios')
        .select('*')
        .eq('user_id', currentUserId)
        .order('created_at', { ascending: false });

      if (scenariosError) throw scenariosError;

      // Load rent increases for each scenario
      const scenariosWithMieterhoehungen: ScenarioWithMieterhoehungen[] = await Promise.all(
        (scenariosData || []).map(async (scenario) => {
          const { data: mieterhoehungenData, error: mieterhoehungenError } = await supabase
            .from('mieterhoehungen')
            .select('*')
            .eq('scenario_id', scenario.id)
            .order('nach_monaten', { ascending: true });

          if (mieterhoehungenError) {
            console.error('Error loading rent increases:', mieterhoehungenError);
            return { ...scenario, mieterhoehungen: [] };
          }

          return {
            ...scenario,
            mieterhoehungen: mieterhoehungenData || [],
          };
        })
      );

      setScenarios(scenariosWithMieterhoehungen);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadScenarios();
  }, [currentUserId]);

  const handleLoad = (scenario: ScenarioWithMieterhoehungen) => {
    const inputs: InvestmentInputs = {
      kaufpreis: scenario.kaufpreis,
      wohnflaeche: scenario.wohnflaeche,
      flaeche: scenario.flaeche,
      nebenkostenProzent: scenario.nebenkosten_prozent,
      eigenkapitalProzent: scenario.eigenkapital_prozent,
      zinssatz: scenario.zinssatz,
      tilgung: scenario.tilgung,
      monatlicheKaltmiete: scenario.monatliche_kaltmiete,
      wohngeldUmlegbar: scenario.wohngeld_umlegbar,
      wohngeldNichtUmlegbar: scenario.wohngeld_nicht_umlegbar,
      haltedauer: scenario.haltedauer,
      wertsteigerungProzent: scenario.wertsteigerung_prozent,
      mieterhoehungen: scenario.mieterhoehungen.map((m) => ({
        nachMonaten: m.nach_monaten,
        prozent: m.prozent,
      })),
    };

    onLoadScenario(inputs);
  };

  const handleEdit = (scenario: ScenarioWithMieterhoehungen) => {
    const inputs: InvestmentInputs = {
      kaufpreis: scenario.kaufpreis,
      wohnflaeche: scenario.wohnflaeche,
      flaeche: scenario.flaeche,
      nebenkostenProzent: scenario.nebenkosten_prozent,
      eigenkapitalProzent: scenario.eigenkapital_prozent,
      zinssatz: scenario.zinssatz,
      tilgung: scenario.tilgung,
      monatlicheKaltmiete: scenario.monatliche_kaltmiete,
      wohngeldUmlegbar: scenario.wohngeld_umlegbar,
      wohngeldNichtUmlegbar: scenario.wohngeld_nicht_umlegbar,
      haltedauer: scenario.haltedauer,
      wertsteigerungProzent: scenario.wertsteigerung_prozent,
      mieterhoehungen: scenario.mieterhoehungen.map((m) => ({
        nachMonaten: m.nach_monaten,
        prozent: m.prozent,
      })),
    };

    // Pass scenario id and name for edit mode
    onLoadScenario(inputs, scenario.id, scenario.name);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Möchten Sie dieses Szenario wirklich löschen?')) {
      return;
    }

    try {
      const { error } = await supabase.from('scenarios').delete().eq('id', id);

      if (error) throw error;

      // Reload scenarios
      loadScenarios();
    } catch (err: any) {
      alert('Fehler beim Löschen: ' + err.message);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4">
        <p className="text-gray-600 text-sm">Lade Szenarien...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4">
        <p className="text-red-600 text-sm">Fehler: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-base font-semibold text-gray-800">
          Gespeicherte Szenarien
        </h2>
        <button
          onClick={loadScenarios}
          className="px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-lg"
        >
          Aktualisieren
        </button>
      </div>

      {scenarios.length === 0 ? (
        <p className="text-gray-600 text-center py-8 text-sm">
          Noch keine Szenarien gespeichert. Speichern Sie Ihr erstes Szenario!
        </p>
      ) : (
        <div className="space-y-2.5">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-sm text-gray-900">{scenario.name}</h3>
                  <div className="mt-1.5 text-xs text-gray-600 space-y-0.5">
                    <p>
                      Kaufpreis: €
                      {scenario.kaufpreis.toLocaleString('de-DE')}
                    </p>
                    <p>
                      Eigenkapital: {(scenario.eigenkapital_prozent * 100).toFixed(1)}%
                    </p>
                    <p>Haltedauer: {scenario.haltedauer} Jahre</p>
                    {scenario.mieterhoehungen.length > 0 && (
                      <p>
                        Mieterhöhungen: {scenario.mieterhoehungen.length}
                      </p>
                    )}
                  </div>
                  <p className="mt-1.5 text-[10px] text-gray-400">
                    Erstellt: {new Date(scenario.created_at).toLocaleDateString('de-DE')}
                  </p>
                </div>
                <div className="flex gap-1.5 ml-4">
                  <button
                    onClick={() => handleLoad(scenario)}
                    className="p-2 bg-[#4B644A] text-white rounded-lg hover:bg-[#3a4f39] transition-colors group relative"
                    title="Laden"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                      Laden
                    </span>
                  </button>
                  <button
                    onClick={() => handleEdit(scenario)}
                    className="p-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors group relative"
                    title="Bearbeiten"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                      <path d="m15 5 4 4"></path>
                    </svg>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                      Bearbeiten
                    </span>
                  </button>
                  <button
                    onClick={() => handleDelete(scenario.id)}
                    className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors group relative"
                    title="Löschen"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    </svg>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
                      Löschen
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
