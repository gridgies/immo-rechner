'use client';

import { useState, useEffect } from 'react';
import { InvestmentInputs, Mieterhoehung } from '@/lib/types';
import { calculateInvestment } from '@/lib/calculator';
import { createClient } from '@/lib/supabase/client';
import { ScenarioWithMieterhoehungen } from '@/lib/types/database';
import ResultsDisplay from './ResultsDisplay';

interface InvestmentFormWithSaveProps {
  userId: string;
  userEmail: string;
  onSignOut: () => void;
}

export default function InvestmentFormWithSave({ userId, userEmail, onSignOut }: InvestmentFormWithSaveProps) {
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

  // Saved scenarios state
  const [scenarios, setScenarios] = useState<ScenarioWithMieterhoehungen[]>([]);
  const [scenariosOpen, setScenariosOpen] = useState(true);
  const [loadingScenarios, setLoadingScenarios] = useState(false);

  // Auto-calculate states
  const [autoCalculateNichtUmlegbar, setAutoCalculateNichtUmlegbar] = useState(true);
  const [autoCalculateWertsteigerung, setAutoCalculateWertsteigerung] = useState(true);

  const supabase = createClient();

  // Load scenarios on mount
  useEffect(() => {
    loadScenarios();
  }, [userId]);

  // Auto-calculate nicht umlegbar
  useEffect(() => {
    if (autoCalculateNichtUmlegbar && wohngeldUmlegbar) {
      const umlegbar = parseFloat(wohngeldUmlegbar);
      if (!isNaN(umlegbar)) {
        setWohngeldNichtUmlegbar((umlegbar * 0.3).toFixed(2));
      }
    }
  }, [wohngeldUmlegbar, autoCalculateNichtUmlegbar]);

  // Auto-update wertsteigerung
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

  const loadScenarios = async () => {
    try {
      setLoadingScenarios(true);
      
      const { data: scenariosData, error: scenariosError } = await supabase
        .from('scenarios')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (scenariosError) throw scenariosError;

      const scenariosWithMieterhoehungen: ScenarioWithMieterhoehungen[] = await Promise.all(
        (scenariosData || []).map(async (scenario) => {
          const { data: mieterhoehungenData } = await supabase
            .from('mieterhoehungen')
            .select('*')
            .eq('scenario_id', scenario.id)
            .order('nach_monaten', { ascending: true });

          return {
            ...scenario,
            mieterhoehungen: mieterhoehungenData || [],
          };
        })
      );

      setScenarios(scenariosWithMieterhoehungen);
    } catch (err: any) {
      console.error('Error loading scenarios:', err);
    } finally {
      setLoadingScenarios(false);
    }
  };

  const addMieterhoehung = () => {
    setMieterhoehungen([...mieterhoehungen, { nachMonaten: 12, prozent: 0.15 }]);
  };

  const removeMieterhoehung = (index: number) => {
    setMieterhoehungen(mieterhoehungen.filter((_, i) => i !== index));
  };

  const updateMieterhoehung = (index: number, field: 'nachMonaten' | 'prozent', value: number) => {
    const updated = [...mieterhoehungen];
    updated[index] = { ...updated[index], [field]: value };
    setMieterhoehungen(updated);
  };

  const handleLoadScenario = (scenario: ScenarioWithMieterhoehungen) => {
    setKaufpreis(scenario.kaufpreis.toString());
    setWohnflaeche(scenario.wohnflaeche.toString());
    setNebenkostenProzent((scenario.nebenkosten_prozent * 100).toString());
    setEigenkapitalProzent((scenario.eigenkapital_prozent * 100).toString());
    setZinssatz((scenario.zinssatz * 100).toString());
    setTilgung((scenario.tilgung * 100).toString());
    setMonatlicheKaltmiete(scenario.monatliche_kaltmiete.toString());
    setWohngeldUmlegbar(scenario.wohngeld_umlegbar.toString());
    setWohngeldNichtUmlegbar(scenario.wohngeld_nicht_umlegbar.toString());
    setHaltedauer(scenario.haltedauer);
    setWertsteigerungProzent((scenario.wertsteigerung_prozent * 100).toString());
    setMieterhoehungen(scenario.mieterhoehungen.map((m) => ({
      nachMonaten: m.nach_monaten,
      prozent: m.prozent,
    })));
    setAutoCalculateNichtUmlegbar(false);
    setAutoCalculateWertsteigerung(false);
    setEditingScenarioId(scenario.id);
    setScenarioName(scenario.name);
  };

  const handleDeleteScenario = async (id: string) => {
    if (!confirm('Möchten Sie dieses Szenario wirklich löschen?')) {
      return;
    }

    try {
      const { error } = await supabase.from('scenarios').delete().eq('id', id);
      if (error) throw error;
      loadScenarios();
    } catch (err: any) {
      alert('Fehler beim Löschen: ' + err.message);
    }
  };

  const handleSave = async () => {
    if (!scenarioName.trim()) {
      alert('Bitte geben Sie einen Namen für das Szenario ein');
      return;
    }

    setSaving(true);
    setSaveMessage(null);

    try {
      if (editingScenarioId) {
        // Update existing scenario
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

        await supabase.from('mieterhoehungen').delete().eq('scenario_id', editingScenarioId);

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
        // Insert new scenario
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
      loadScenarios();
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
    <>
      {/* Left Navigation Sidebar */}
      <div className="w-52 bg-[#7099A3] flex flex-col h-full overflow-hidden">
        {/* Logo */}
        <div className="p-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">IR</span>
            </div>
            <h1 className="text-base font-semibold text-white">
              Immobilien Rechner
            </h1>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto">
          <nav className="p-2">
            {/* Active: Cashflow Calculator */}
            <div className="px-3 py-2.5 bg-white/10 rounded text-white text-sm font-medium mb-1">
              📊 Cashflow Rechner
            </div>
            
            {/* Future navigation items */}
            <div className="px-3 py-2.5 text-white/60 text-sm font-medium hover:bg-white/5 rounded cursor-not-allowed mb-1">
              📈 Rendite Analyse
              <span className="text-[10px] ml-2 opacity-50">(bald)</span>
            </div>
            
            <div className="px-3 py-2.5 text-white/60 text-sm font-medium hover:bg-white/5 rounded cursor-not-allowed mb-1">
              🏘️ Vergleich
              <span className="text-[10px] ml-2 opacity-50">(bald)</span>
            </div>
          </nav>

          {/* Saved Scenarios Section */}
          <div className="mt-4 border-t border-white/20 pt-4">
            <button
              onClick={() => setScenariosOpen(!scenariosOpen)}
              className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
            >
              <span className="text-sm font-medium text-white">Szenarien</span>
              <svg
                className={`w-4 h-4 text-white transition-transform ${scenariosOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {scenariosOpen && (
              <div className="pb-2">
                {loadingScenarios ? (
                  <div className="px-4 py-2 text-xs text-white/60">Lädt...</div>
                ) : scenarios.length === 0 ? (
                  <div className="px-4 py-2 text-xs text-white/60">Keine gespeichert</div>
                ) : (
                  <div className="space-y-1 px-2">
                    {scenarios.map((scenario) => (
                      <div
                        key={scenario.id}
                        className="group hover:bg-white/5 rounded"
                      >
                        <div className="flex items-start justify-between gap-2 px-2 py-2">
                          <button
                            onClick={() => handleLoadScenario(scenario)}
                            className="flex-1 text-left"
                          >
                            <div className="text-xs font-medium text-white truncate">
                              {scenario.name}
                            </div>
                            <div className="text-[10px] text-white/60 mt-0.5">
                              €{scenario.kaufpreis.toLocaleString('de-DE')}
                            </div>
                          </button>
                          <button
                            onClick={() => handleDeleteScenario(scenario.id)}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-opacity"
                            title="Löschen"
                          >
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* User Info at Bottom */}
        <div className="p-3 border-t border-white/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div className="w-7 h-7 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-medium">
                  {userEmail.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-xs text-white truncate">
                {userEmail}
              </span>
            </div>
            <button
              onClick={onSignOut}
              className="ml-2 text-white/80 hover:text-white flex-shrink-0"
              title="Abmelden"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="max-w-7xl mx-auto p-6">
          {/* Editing Indicator */}
          {editingScenarioId && (
            <div className="mb-4 p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-800">
              Bearbeite: "{scenarioName}"
            </div>
          )}

          <div className="grid lg:grid-cols-[45%_55%] gap-6">
            {/* Left Column - Input Form */}
            <div className="space-y-4">
              {/* Immobiliendetails Section */}
              <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4B644A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <circle cx="12" cy="15" r="3"></circle>
                    <path d="m9 18 3 3 3-3"></path>
                  </svg>
                  <h2 className="text-base font-semibold text-gray-800">Immobiliendetails</h2>
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
                      className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
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
                      className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                    />
                  </div>

                  {/* Nebenkosten */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Nebenkosten (%)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={nebenkostenProzent}
                      onChange={(e) => setNebenkostenProzent(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
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
                      className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
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
                      className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
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
                      className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
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
                      className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                    />
                  </div>

                  {/* Hausgeld umlegbar */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Hausgeld umlegbar (€/Monat)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      value={wohngeldUmlegbar}
                      onChange={(e) => setWohngeldUmlegbar(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                    />
                  </div>

                  {/* Hausgeld nicht umlegbar */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Hausgeld nicht umlegbar (€/Monat)
                    </label>
                    <div className="flex gap-1.5">
                      <input
                        type="number"
                        step="0.01"
                        value={wohngeldNichtUmlegbar}
                        onChange={(e) => {
                          setWohngeldNichtUmlegbar(e.target.value);
                          setAutoCalculateNichtUmlegbar(false);
                        }}
                        className="flex-1 px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                      />
                      <button
                        onClick={() => setAutoCalculateNichtUmlegbar(true)}
                        className="px-2 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                        title="Auto (30%)"
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
                      className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                    >
                      <option value={10}>10 Jahre</option>
                      <option value={20}>20 Jahre</option>
                      <option value={30}>30 Jahre</option>
                    </select>
                  </div>

                  {/* Wertsteigerung */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Wertsteigerung (%)
                    </label>
                    <div className="flex gap-1.5">
                      <input
                        type="number"
                        step="0.01"
                        value={wertsteigerungProzent}
                        onChange={(e) => {
                          setWertsteigerungProzent(e.target.value);
                          setAutoCalculateWertsteigerung(false);
                        }}
                        className="flex-1 px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                      />
                      <button
                        onClick={() => setAutoCalculateWertsteigerung(true)}
                        className="px-2 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                        title="Auto"
                      >
                        Auto
                      </button>
                    </div>
                  </div>

                  {/* Mieterhöhungen */}
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-medium text-gray-700">
                        Mieterhöhungen
                      </label>
                      <button
                        onClick={addMieterhoehung}
                        className="px-2 py-1 bg-[#7099A3] text-white text-xs rounded hover:bg-[#5d7e87]"
                      >
                        + Hinzufügen
                      </button>
                    </div>

                    <div className="space-y-1.5">
                      {mieterhoehungen.map((erhoehung, index) => (
                        <div key={index} className="flex gap-1.5 items-center">
                          <input
                            type="number"
                            value={erhoehung.nachMonaten}
                            onChange={(e) =>
                              updateMieterhoehung(index, 'nachMonaten', parseInt(e.target.value))
                            }
                            placeholder="Monat"
                            className="w-16 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                          />
                          <span className="text-xs text-gray-400">:</span>
                          <input
                            type="number"
                            step="0.01"
                            value={(erhoehung.prozent * 100).toFixed(2)}
                            onChange={(e) =>
                              updateMieterhoehung(index, 'prozent', parseFloat(e.target.value) / 100)
                            }
                            placeholder="%"
                            className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                          />
                          <button
                            onClick={() => removeMieterhoehung(index)}
                            className="p-1 text-red-600 hover:bg-red-50 rounded"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>

                    {mieterhoehungen.length === 0 && (
                      <p className="text-xs text-gray-500 text-center py-2">
                        Keine Mieterhöhungen geplant
                      </p>
                    )}
                  </div>

                  {/* Save Section */}
                  <div className="pt-2 border-t border-gray-200">
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      {editingScenarioId ? 'Szenario aktualisieren' : 'Szenario speichern'}
                    </label>
                    <div className="flex gap-1.5">
                      <input
                        type="text"
                        value={scenarioName}
                        onChange={(e) => setScenarioName(e.target.value)}
                        placeholder="Szenario Name"
                        className="flex-1 px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                      />
                      <button
                        onClick={handleSave}
                        disabled={saving}
                        className="px-3 py-1.5 bg-[#7099A3] text-white text-xs rounded hover:bg-[#5d7e87] disabled:opacity-50"
                      >
                        {saving ? '...' : (editingScenarioId ? 'Update' : 'Save')}
                      </button>
                      {editingScenarioId && (
                        <button
                          onClick={() => {
                            setEditingScenarioId(null);
                            setScenarioName('');
                          }}
                          className="px-2 py-1.5 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                    {saveMessage && (
                      <p className="mt-1 text-xs text-green-600">{saveMessage}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Results */}
            <div className="space-y-4">
              {result && <ResultsDisplay result={result} />}
              {!result && (
                <div className="bg-white rounded-lg shadow border border-gray-200 p-8 text-center">
                  <p className="text-gray-500 text-sm">Füllen Sie die Felder aus, um die Berechnung zu sehen</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#7099A3] rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">IR</span>
            </div>
            <h1 className="text-base font-semibold text-gray-900">
              Immobilien Rechner
            </h1>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Saved Scenarios Dropdown */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setScenariosOpen(!scenariosOpen)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="text-sm font-medium text-gray-700">Gespeicherte Szenarien</span>
              <svg
                className={`w-4 h-4 text-gray-500 transition-transform ${scenariosOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {scenariosOpen && (
              <div className="pb-2">
                {loadingScenarios ? (
                  <div className="px-4 py-2 text-xs text-gray-500">Lade...</div>
                ) : scenarios.length === 0 ? (
                  <div className="px-4 py-2 text-xs text-gray-500">Keine Szenarien gespeichert</div>
                ) : (
                  <div className="space-y-1">
                    {scenarios.map((scenario) => (
                      <div
                        key={scenario.id}
                        className="px-4 py-2 hover:bg-gray-50 group"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <button
                            onClick={() => handleLoadScenario(scenario)}
                            className="flex-1 text-left"
                          >
                            <div className="text-xs font-medium text-gray-900 truncate">
                              {scenario.name}
                            </div>
                            <div className="text-[10px] text-gray-500 mt-0.5">
                              €{scenario.kaufpreis.toLocaleString('de-DE')}
                            </div>
                          </button>
                          <button
                            onClick={() => handleDeleteScenario(scenario.id)}
                            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded transition-opacity"
                            title="Löschen"
                          >
                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Input Form */}
          <div className="p-4 space-y-3">
            {/* Editing Indicator */}
            {editingScenarioId && (
              <div className="p-2 bg-blue-50 border border-blue-200 rounded text-xs text-blue-800">
                Bearbeite: "{scenarioName}"
              </div>
            )}

            {/* Input Fields */}
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
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
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
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                />
              </div>

              {/* Nebenkosten */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Nebenkosten (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={nebenkostenProzent}
                  onChange={(e) => setNebenkostenProzent(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
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
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
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
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
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
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
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
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                />
              </div>

              {/* Hausgeld umlegbar */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Hausgeld umlegbar (€/Monat)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={wohngeldUmlegbar}
                  onChange={(e) => setWohngeldUmlegbar(e.target.value)}
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                />
              </div>

              {/* Hausgeld nicht umlegbar */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Hausgeld nicht umlegbar (€/Monat)
                </label>
                <div className="flex gap-1.5">
                  <input
                    type="number"
                    step="0.01"
                    value={wohngeldNichtUmlegbar}
                    onChange={(e) => {
                      setWohngeldNichtUmlegbar(e.target.value);
                      setAutoCalculateNichtUmlegbar(false);
                    }}
                    className="flex-1 px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                  />
                  <button
                    onClick={() => setAutoCalculateNichtUmlegbar(true)}
                    className="px-2 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                    title="Auto (30%)"
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
                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                >
                  <option value={10}>10 Jahre</option>
                  <option value={20}>20 Jahre</option>
                  <option value={30}>30 Jahre</option>
                </select>
              </div>

              {/* Wertsteigerung */}
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Wertsteigerung (%)
                </label>
                <div className="flex gap-1.5">
                  <input
                    type="number"
                    step="0.01"
                    value={wertsteigerungProzent}
                    onChange={(e) => {
                      setWertsteigerungProzent(e.target.value);
                      setAutoCalculateWertsteigerung(false);
                    }}
                    className="flex-1 px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                  />
                  <button
                    onClick={() => setAutoCalculateWertsteigerung(true)}
                    className="px-2 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                    title="Auto"
                  >
                    Auto
                  </button>
                </div>
              </div>

              {/* Mieterhöhungen */}
              <div className="pt-2 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-medium text-gray-700">
                    Mieterhöhungen
                  </label>
                  <button
                    onClick={addMieterhoehung}
                    className="px-2 py-1 bg-[#7099A3] text-white text-xs rounded hover:bg-[#5d7e87]"
                  >
                    + Hinzufügen
                  </button>
                </div>

                <div className="space-y-1.5">
                  {mieterhoehungen.map((erhoehung, index) => (
                    <div key={index} className="flex gap-1.5 items-center">
                      <input
                        type="number"
                        value={erhoehung.nachMonaten}
                        onChange={(e) =>
                          updateMieterhoehung(index, 'nachMonaten', parseInt(e.target.value))
                        }
                        placeholder="Monat"
                        className="w-16 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                      />
                      <span className="text-xs text-gray-400">:</span>
                      <input
                        type="number"
                        step="0.01"
                        value={(erhoehung.prozent * 100).toFixed(2)}
                        onChange={(e) =>
                          updateMieterhoehung(index, 'prozent', parseFloat(e.target.value) / 100)
                        }
                        placeholder="%"
                        className="flex-1 px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                      />
                      <button
                        onClick={() => removeMieterhoehung(index)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>

                {mieterhoehungen.length === 0 && (
                  <p className="text-xs text-gray-500 text-center py-2">
                    Keine Mieterhöhungen geplant
                  </p>
                )}
              </div>

              {/* Save Section */}
              <div className="pt-2 border-t border-gray-200">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  {editingScenarioId ? 'Szenario aktualisieren' : 'Szenario speichern'}
                </label>
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={scenarioName}
                    onChange={(e) => setScenarioName(e.target.value)}
                    placeholder="Szenario Name"
                    className="flex-1 px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                  />
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-3 py-1.5 bg-[#7099A3] text-white text-xs rounded hover:bg-[#5d7e87] disabled:opacity-50"
                  >
                    {saving ? '...' : (editingScenarioId ? 'Update' : 'Save')}
                  </button>
                  {editingScenarioId && (
                    <button
                      onClick={() => {
                        setEditingScenarioId(null);
                        setScenarioName('');
                      }}
                      className="px-2 py-1.5 bg-gray-200 text-gray-700 text-xs rounded hover:bg-gray-300"
                    >
                      Cancel
                    </button>
                  )}
                </div>
                {saveMessage && (
                  <p className="mt-1 text-xs text-green-600">{saveMessage}</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="space-y-4">
            {result && <ResultsDisplay result={result} />}
            {!result && (
              <div className="bg-white rounded-lg shadow border border-gray-200 p-8 text-center">
                <p className="text-gray-500 text-sm">Füllen Sie die Felder aus, um die Berechnung zu sehen</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
