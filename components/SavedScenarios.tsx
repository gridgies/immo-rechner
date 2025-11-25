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
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-600">Lade Szenarien...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-red-600">Fehler: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          Gespeicherte Szenarien
        </h2>
        <button
          onClick={loadScenarios}
          className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
        >
          Aktualisieren
        </button>
      </div>

      {scenarios.length === 0 ? (
        <p className="text-gray-600 text-center py-8">
          Noch keine Szenarien gespeichert. Speichern Sie Ihr erstes Szenario!
        </p>
      ) : (
        <div className="space-y-3">
          {scenarios.map((scenario) => (
            <div
              key={scenario.id}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{scenario.name}</h3>
                  <div className="mt-2 text-sm text-gray-600 space-y-1">
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
                  <p className="mt-2 text-xs text-gray-400">
                    Erstellt: {new Date(scenario.created_at).toLocaleDateString('de-DE')}
                  </p>
                </div>
                <div className="flex flex-col gap-2 ml-4">
                  <button
                    onClick={() => handleLoad(scenario)}
                    className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                  >
                    Laden
                  </button>
                  <button
                    onClick={() => handleEdit(scenario)}
                    className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-lg hover:bg-yellow-700"
                  >
                    Bearbeiten
                  </button>
                  <button
                    onClick={() => handleDelete(scenario.id)}
                    className="px-3 py-1 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700"
                  >
                    Löschen
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
