'use client';

import { useState, useEffect } from 'react';
import { InvestmentInputs, Mieterhoehung } from '@/lib/types';
import { calculateInvestment } from '@/lib/calculator';
import { createClient } from '@/lib/supabase/client';
import ResultsDisplay from './ResultsDisplay';
import SavedScenarios from './SavedScenarios';

interface InvestmentFormWithSaveProps {
  userId: string;
}

export default function InvestmentFormWithSave({ userId }: InvestmentFormWithSaveProps) {
  // Form state
  const [kaufpreis, setKaufpreis] = useState<string>('355000');
  const [wohnflaeche, setWohnflaeche] = useState<string>('69.24');
  const [nebenkostenProzent, setNebenkostenProzent] = useState<string>('11.57');
  const [eigenkapitalProzent, setEigenkapitalProzent] = useState<string>('20');
  const [zinssatz, setZinssatz] = useState<string>('3.5');
  const [tilgung, setTilgung] = useState<string>('1');
  const [monatlicheKaltmiete, setMonatlicheKaltmiete] = useState<string>('861');
  const [wohngeldUmlegbar, setWohngeldUmlegbar] = useState<string>('150');
  const [wohngeldNichtUmlegbar, setWohngeldNichtUmlegbar] = useState<string>('150');
  const [haltedauer, setHaltedauer] = useState<10 | 20 | 30>(30);
  const [wertsteigerungProzent, setWertsteigerungProzent] = useState<string>('150');
  const [mieterhoehungen, setMieterhoehungen] = useState<Mieterhoehung[]>([
    { nachMonaten: 12, prozent: 0.15 },
    { nachMonaten: 24, prozent: 0.15 },
  ]);

  const [scenarioName, setScenarioName] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [editingScenarioId, setEditingScenarioId] = useState<string | null>(null);

  // Auto-calculate nicht umlegbar when umlegbar changes
  const [autoCalculateNichtUmlegbar, setAutoCalculateNichtUmlegbar] = useState(true);
  
  // Auto-calculate wertsteigerung based on holding period
  const [autoCalculateWertsteigerung, setAutoCalculateWertsteigerung] = useState(true);

  const supabase = createClient();

  useEffect(() => {
    if (autoCalculateNichtUmlegbar && wohngeldUmlegbar) {
      const umlegbar = parseFloat(wohngeldUmlegbar);
      if (!isNaN(umlegbar)) {
        setWohngeldNichtUmlegbar((umlegbar * 0.3).toFixed(2));
      }
    }
  }, [wohngeldUmlegbar, autoCalculateNichtUmlegbar]);

  // Auto-update wertsteigerung when haltedauer changes
  useEffect(() => {
    if (autoCalculateWertsteigerung) {
      const defaultValues: { [key: number]: string } = {
        10: '45',
        20: '90',
        30: '150',
      };
      setWertsteigerungProzent(defaultValues[haltedauer]);
    }
  }, [haltedauer, autoCalculateWertsteigerung]);

  // Add new rent increase
  const addMieterhoehung = () => {
    setMieterhoehungen([...mieterhoehungen, { nachMonaten: 12, prozent: 0.15 }]);
  };

  // Remove rent increase
  const removeMieterhoehung = (index: number) => {
    setMieterhoehungen(mieterhoehungen.filter((_, i) => i !== index));
  };

  // Update rent increase
  const updateMieterhoehung = (index: number, field: 'nachMonaten' | 'prozent', value: number) => {
    const updated = [...mieterhoehungen];
    updated[index] = { ...updated[index], [field]: value };
    setMieterhoehungen(updated);
  };

  // Load scenario
  const handleLoadScenario = (inputs: InvestmentInputs, scenarioId?: string, scenarioName?: string) => {
    setKaufpreis(inputs.kaufpreis.toString());
    setWohnflaeche(inputs.wohnflaeche.toString());
    setNebenkostenProzent((inputs.nebenkostenProzent * 100).toString());
    setEigenkapitalProzent((inputs.eigenkapitalProzent * 100).toString());
    setZinssatz((inputs.zinssatz * 100).toString());
    setTilgung((inputs.tilgung * 100).toString());
    setMonatlicheKaltmiete(inputs.monatlicheKaltmiete.toString());
    setWohngeldUmlegbar(inputs.wohngeldUmlegbar.toString());
    setWohngeldNichtUmlegbar(inputs.wohngeldNichtUmlegbar.toString());
    setHaltedauer(inputs.haltedauer);
    setWertsteigerungProzent((inputs.wertsteigerungProzent * 100).toString());
    setMieterhoehungen(inputs.mieterhoehungen);
    setAutoCalculateNichtUmlegbar(false);
    setAutoCalculateWertsteigerung(false);

    // Set editing mode if scenarioId provided
    if (scenarioId && scenarioName) {
      setEditingScenarioId(scenarioId);
      setScenarioName(scenarioName);
    } else {
      setEditingScenarioId(null);
      setScenarioName('');
    }

    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Save or update scenario
  const handleSave = async () => {
    if (!scenarioName.trim()) {
      alert('Bitte geben Sie einen Namen für das Szenario ein');
      return;
    }

    setSaving(true);
    setSaveMessage(null);

    try {
      if (editingScenarioId) {
        // UPDATE existing scenario
        const { error: updateError } = await supabase
          .from('scenarios')
          .update({
            name: scenarioName,
            kaufpreis: parseFloat(kaufpreis) || 0,
            wohnflaeche: parseFloat(wohnflaeche) || 0,
            nebenkosten_prozent: (parseFloat(nebenkostenProzent) || 0) / 100,
            eigenkapital_prozent: (parseFloat(eigenkapitalProzent) || 0) / 100,
            zinssatz: (parseFloat(zinssatz) || 0) / 100,
            tilgung: (parseFloat(tilgung) || 0) / 100,
            monatliche_kaltmiete: parseFloat(monatlicheKaltmiete) || 0,
            wohngeld_umlegbar: parseFloat(wohngeldUmlegbar) || 0,
            wohngeld_nicht_umlegbar: parseFloat(wohngeldNichtUmlegbar) || 0,
            haltedauer,
            wertsteigerung_prozent: (parseFloat(wertsteigerungProzent) || 0) / 100,
          })
          .eq('id', editingScenarioId);

        if (updateError) throw updateError;

        // Delete old rent increases
        await supabase
          .from('mieterhoehungen')
          .delete()
          .eq('scenario_id', editingScenarioId);

        // Insert new rent increases
        if (mieterhoehungen.length > 0) {
          const { error: mieterhoehungenError } = await supabase
            .from('mieterhoehungen')
            .insert(
              mieterhoehungen.map((m) => ({
                scenario_id: editingScenarioId,
                nach_monaten: m.nachMonaten,
                prozent: m.prozent,
              }))
            );

          if (mieterhoehungenError) throw mieterhoehungenError;
        }

        setSaveMessage('Szenario erfolgreich aktualisiert!');
        setEditingScenarioId(null);
      } else {
        // INSERT new scenario
        const { data: scenarioData, error: scenarioError } = await supabase
          .from('scenarios')
          .insert({
            user_id: userId,
            name: scenarioName,
            kaufpreis: parseFloat(kaufpreis) || 0,
            wohnflaeche: parseFloat(wohnflaeche) || 0,
            nebenkosten_prozent: (parseFloat(nebenkostenProzent) || 0) / 100,
            eigenkapital_prozent: (parseFloat(eigenkapitalProzent) || 0) / 100,
            zinssatz: (parseFloat(zinssatz) || 0) / 100,
            tilgung: (parseFloat(tilgung) || 0) / 100,
            monatliche_kaltmiete: parseFloat(monatlicheKaltmiete) || 0,
            wohngeld_umlegbar: parseFloat(wohngeldUmlegbar) || 0,
            wohngeld_nicht_umlegbar: parseFloat(wohngeldNichtUmlegbar) || 0,
            haltedauer,
            wertsteigerung_prozent: (parseFloat(wertsteigerungProzent) || 0) / 100,
          })
          .select()
          .single();

        if (scenarioError) throw scenarioError;

        // Insert rent increases
        if (mieterhoehungen.length > 0) {
          const { error: mieterhoehungenError } = await supabase
            .from('mieterhoehungen')
            .insert(
              mieterhoehungen.map((m) => ({
                scenario_id: scenarioData.id,
                nach_monaten: m.nachMonaten,
                prozent: m.prozent,
              }))
            );

          if (mieterhoehungenError) throw mieterhoehungenError;
        }

        setSaveMessage('Szenario erfolgreich gespeichert!');
      }

      setScenarioName('');

      // Clear message after 3 seconds
      setTimeout(() => setSaveMessage(null), 3000);
    } catch (error: any) {
      alert('Fehler beim Speichern: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  // Calculate results
  const getCalculationResult = () => {
    try {
      const inputs: InvestmentInputs = {
        kaufpreis: parseFloat(kaufpreis) || 0,
        wohnflaeche: parseFloat(wohnflaeche) || 0,
        nebenkostenProzent: (parseFloat(nebenkostenProzent) || 0) / 100,
        eigenkapitalProzent: (parseFloat(eigenkapitalProzent) || 0) / 100,
        zinssatz: (parseFloat(zinssatz) || 0) / 100,
        tilgung: (parseFloat(tilgung) || 0) / 100,
        monatlicheKaltmiete: parseFloat(monatlicheKaltmiete) || 0,
        wohngeldUmlegbar: parseFloat(wohngeldUmlegbar) || 0,
        wohngeldNichtUmlegbar: parseFloat(wohngeldNichtUmlegbar) || 0,
        haltedauer,
        wertsteigerungProzent: (parseFloat(wertsteigerungProzent) || 0) / 100,
        mieterhoehungen,
      };

      return calculateInvestment(inputs);
    } catch (error) {
      console.error('Calculation error:', error);
      return null;
    }
  };

  const result = getCalculationResult();

  return (
    <div className="max-w-[1800px] mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4">
        {/* Input Form and Results - 40% */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4B644A]">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <circle cx="12" cy="13" r="3"></circle>
                <path d="m9 17 1.5-1.5"></path>
                <path d="m15 11-1.5 1.5"></path>
              </svg>
              <h2 className="text-base font-semibold text-gray-800">
                Immobiliendetails
              </h2>
            </div>

            <div className="space-y-2.5">
              {/* Kaufpreis */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Kaufpreis (€)
                </label>
                <input
                  type="number"
                  value={kaufpreis}
                  onChange={(e) => setKaufpreis(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                />
              </div>

              {/* Wohnfläche */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Wohnfläche (m²)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={wohnflaeche}
                  onChange={(e) => setWohnflaeche(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                />
              </div>

              {/* Nebenkosten */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Nebenkosten (%)
                  <span className="text-xs text-gray-500 ml-1">
                    (Grunderwerbsteuer, Notar, Makler)
                  </span>
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={nebenkostenProzent}
                  onChange={(e) => setNebenkostenProzent(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                />
              </div>

              {/* Eigenkapital */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Eigenkapital (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={eigenkapitalProzent}
                  onChange={(e) => setEigenkapitalProzent(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                />
              </div>

              {/* Zinssatz */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Zinssatz (% p.a.)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={zinssatz}
                  onChange={(e) => setZinssatz(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                />
              </div>

              {/* Tilgung */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Tilgung (% p.a.)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={tilgung}
                  onChange={(e) => setTilgung(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                />
              </div>

              {/* Monatliche Kaltmiete */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Monatliche Kaltmiete (€)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={monatlicheKaltmiete}
                  onChange={(e) => setMonatlicheKaltmiete(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                />
              </div>

              {/* Hausgeld */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Hausgeld (€/Monat)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={wohngeldUmlegbar}
                  onChange={(e) => setWohngeldUmlegbar(e.target.value)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                />
              </div>

              {/* Hausgeld nicht umlegbar */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Hausgeld nicht umlegbar (€/Monat)
                  <span className="text-xs text-gray-500 ml-1">
                    (Standard: 30% von umlegbar)
                  </span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="0.01"
                    value={wohngeldNichtUmlegbar}
                    onChange={(e) => {
                      setWohngeldNichtUmlegbar(e.target.value);
                      setAutoCalculateNichtUmlegbar(false);
                    }}
                    className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                  />
                  <button
                    onClick={() => setAutoCalculateNichtUmlegbar(true)}
                    className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
                    title="Auto-berechnen (30%)"
                  >
                    Auto
                  </button>
                </div>
              </div>

              {/* Haltedauer */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Haltedauer
                </label>
                <select
                  value={haltedauer}
                  onChange={(e) => setHaltedauer(parseInt(e.target.value) as 10 | 20 | 30)}
                  className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                >
                  <option value={10}>10 Jahre</option>
                  <option value={20}>20 Jahre</option>
                  <option value={30}>30 Jahre</option>
                </select>
              </div>

              {/* Wertsteigerung */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Erwartete Wertsteigerung nach {haltedauer} Jahren (%)
                  <span className="text-xs text-gray-500 ml-1">
                    (10J: 45%, 20J: 90%, 30J: 150%)
                  </span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="0.01"
                    value={wertsteigerungProzent}
                    onChange={(e) => {
                      setWertsteigerungProzent(e.target.value);
                      setAutoCalculateWertsteigerung(false);
                    }}
                    className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                  />
                  <button
                    onClick={() => setAutoCalculateWertsteigerung(true)}
                    className="px-3 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg"
                    title="Auto-berechnen basierend auf Haltedauer"
                  >
                    Auto
                  </button>
                </div>
              </div>

              {/* Mieterhöhungen */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Mieterhöhungen
                  </label>
                  <button
                    onClick={addMieterhoehung}
                    className="px-3 py-1 bg-[#4B644A] text-white text-sm rounded-lg hover:bg-[#3a4f39] flex items-center gap-1"
                  >
                    <span className="text-lg">+</span> Hinzufügen
                  </button>
                </div>

                <div className="space-y-2">
                  {mieterhoehungen.map((erhoehung, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <div className="flex-1">
                        <input
                          type="number"
                          value={erhoehung.nachMonaten}
                          onChange={(e) =>
                            updateMieterhoehung(index, 'nachMonaten', parseInt(e.target.value))
                          }
                          placeholder="Monat"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                        />
                        <span className="text-xs text-gray-500">Nach Monaten</span>
                      </div>
                      <span className="text-gray-400">:</span>
                      <div className="flex-1">
                        <input
                          type="number"
                          step="0.01"
                          value={(erhoehung.prozent * 100).toFixed(2)}
                          onChange={(e) =>
                            updateMieterhoehung(index, 'prozent', parseFloat(e.target.value) / 100)
                          }
                          placeholder="%"
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                        />
                        <span className="text-xs text-gray-500">Erhöhung (%)</span>
                      </div>
                      <button
                        onClick={() => removeMieterhoehung(index)}
                        className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg"
                        title="Entfernen"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                {mieterhoehungen.length === 0 && (
                  <p className="text-sm text-gray-500 text-center py-4">
                    Keine Mieterhöhungen geplant
                  </p>
                )}
              </div>

              {/* Save Section */}
              <div className="pt-4 border-t border-gray-200">
                {editingScenarioId && (
                  <div className="mb-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Bearbeitungsmodus:</strong> Sie bearbeiten gerade "{scenarioName}"
                    </p>
                  </div>
                )}
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {editingScenarioId ? 'Szenario aktualisieren' : 'Szenario speichern'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={scenarioName}
                    onChange={(e) => setScenarioName(e.target.value)}
                    placeholder="z.B. Wohnung Prenzlauer Berg"
                    className="flex-1 px-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4B644A] focus:border-transparent"
                  />
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {saving 
                      ? (editingScenarioId ? 'Aktualisiert...' : 'Speichert...')
                      : (editingScenarioId ? 'Aktualisieren' : 'Speichern')
                    }
                  </button>
                  {editingScenarioId && (
                    <button
                      onClick={() => {
                        setEditingScenarioId(null);
                        setScenarioName('');
                      }}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                    >
                      Abbrechen
                    </button>
                  )}
                </div>
                {saveMessage && (
                  <p className="mt-2 text-sm text-green-600">{saveMessage}</p>
                )}
              </div>
            </div>
          </div>

          {/* Results */}
          {result && (
            <div>
              <ResultsDisplay result={result} />
            </div>
          )}
        </div>

        {/* Saved Scenarios - 60% right side */}
        <div>
          <SavedScenarios onLoadScenario={handleLoadScenario} currentUserId={userId} />
        </div>
      </div>
    </div>
  );
}
