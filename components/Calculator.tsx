'use client';

import { useState, useEffect } from 'react';
import { InvestmentInputs } from '@/lib/types';
import { calculateInvestment } from '@/lib/calculator';
import { createClient } from '@/lib/supabase/client';
import { ScenarioWithMieterhoehungen } from '@/lib/types/database';
import ResultsDisplay from './ResultsDisplay';
import CashflowChart from './CashflowChart';
import { Menu, X, ChevronDown, ChevronRight, ChevronLeft, Check, LogIn, Save } from 'lucide-react';
import SteuerSection from './SteuerSection';

// Grunderwerbsteuer nach Bundesland
const GRUNDERWERBSTEUER_BUNDESLAENDER = [
  { name: 'Baden-Württemberg', rate: 5.0 },
  { name: 'Bayern', rate: 3.5 },
  { name: 'Berlin', rate: 6.0 },
  { name: 'Brandenburg', rate: 6.5 },
  { name: 'Bremen', rate: 5.0 },
  { name: 'Hamburg', rate: 5.5 },
  { name: 'Hessen', rate: 6.0 },
  { name: 'Mecklenburg-Vorpommern', rate: 6.0 },
  { name: 'Niedersachsen', rate: 5.0 },
  { name: 'Nordrhein-Westfalen', rate: 6.5 },
  { name: 'Rheinland-Pfalz', rate: 5.0 },
  { name: 'Saarland', rate: 6.5 },
  { name: 'Sachsen', rate: 5.5 },
  { name: 'Sachsen-Anhalt', rate: 5.0 },
  { name: 'Schleswig-Holstein', rate: 6.5 },
  { name: 'Thüringen', rate: 5.0 },
];

interface CalculatorProps {
  userId?: string | null;
  userEmail?: string | null;
  onSignOut?: () => void;
  onLoginClick?: () => void;
  isGuest?: boolean;
}

export default function Calculator({ userId, userEmail, onSignOut, onLoginClick, isGuest = false }: CalculatorProps) {
  // Current tab state (1-4)
  const [currentTab, setCurrentTab] = useState(1);

  // Form state - empty defaults (user must fill in)
  const [kaufpreis, setKaufpreis] = useState<string>('');
  const [wohnflaeche, setWohnflaeche] = useState<string>('');
  const [flaeche, setFlaeche] = useState<string>('');
  const [nebenkostenProzent, setNebenkostenProzent] = useState<string>('11.57');

  // Nebenkosten breakdown
  const [nebenkostenExpanded, setNebenkostenExpanded] = useState(true);
  const [selectedBundesland, setSelectedBundesland] = useState<string>('Hessen');
  const [grunderwerb, setGrunderwerb] = useState<string>('6.0');
  const [makler, setMakler] = useState<string>('3.57');
  const [notar, setNotar] = useState<string>('1.5');
  const [grundbuch, setGrundbuch] = useState<string>('0.5');
  const [sonstigeNebenkosten, setSonstigeNebenkosten] = useState<string>('');

  const [eigenkapitalProzent, setEigenkapitalProzent] = useState<string>('');
  const [eigenkapitalAbsolut, setEigenkapitalAbsolut] = useState<string>('');
  const [eigenkapitalSource, setEigenkapitalSource] = useState<'prozent' | 'absolut'>('prozent');
  const [zinssatz, setZinssatz] = useState<string>('');
  const [tilgung, setTilgung] = useState<string>('2');
  const [monatlicheKaltmiete, setMonatlicheKaltmiete] = useState<string>('');
  const [wohngeldUmlegbar, setWohngeldUmlegbar] = useState<string>('');
  const [wohngeldNichtUmlegbar, setWohngeldNichtUmlegbar] = useState<string>('');
  const [haltedauer, setHaltedauer] = useState<10 | 20 | 30>(20);
  const [wertsteigerungProzent, setWertsteigerungProzent] = useState<string>('80');
  const [mietSteigerungProzent, setMietSteigerungProzent] = useState<string>('2');
  const [hausgeldSteigerungProzent, setHausgeldSteigerungProzent] = useState<string>('2.5');

  // Scenario save state (only for logged-in users)
  const [scenarioName, setScenarioName] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [editingScenarioId, setEditingScenarioId] = useState<string | null>(null);
  const [scenarios, setScenarios] = useState<ScenarioWithMieterhoehungen[]>([]);
  const [scenariosOpen, setScenariosOpen] = useState(true);
  const [loadingScenarios, setLoadingScenarios] = useState(false);

  // Mobile states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Auto-calculate states
  const [autoCalculateNichtUmlegbar, setAutoCalculateNichtUmlegbar] = useState(true);
  const [autoCalculateWertsteigerung, setAutoCalculateWertsteigerung] = useState(true);

  const supabase = createClient();

  // Load scenarios on mount (only for logged-in users)
  useEffect(() => {
    if (userId) {
      loadScenarios();
    }
  }, [userId]);

  // Update Grunderwerbsteuer when Bundesland changes
  useEffect(() => {
    const bundesland = GRUNDERWERBSTEUER_BUNDESLAENDER.find(b => b.name === selectedBundesland);
    if (bundesland) {
      setGrunderwerb(bundesland.rate.toString());
    }
  }, [selectedBundesland]);

  // Auto-calculate nicht umlegbar
  useEffect(() => {
    if (autoCalculateNichtUmlegbar && wohngeldUmlegbar) {
      const umlegbar = parseFloat(wohngeldUmlegbar);
      if (!isNaN(umlegbar)) {
        setWohngeldNichtUmlegbar((umlegbar * 0.3).toFixed(0));
      }
    }
  }, [wohngeldUmlegbar, autoCalculateNichtUmlegbar]);

  // Auto-calculate total nebenkostenProzent from breakdown
  useEffect(() => {
    const kp = parseFloat(kaufpreis) || 0;
    const sonstige = parseFloat(sonstigeNebenkosten) || 0;
    const sonstigeProzent = kp > 0 ? (sonstige / kp) * 100 : 0;

    const total = (
      (parseFloat(grunderwerb) || 0) +
      (parseFloat(makler) || 0) +
      (parseFloat(notar) || 0) +
      (parseFloat(grundbuch) || 0) +
      sonstigeProzent
    ).toFixed(2);
    setNebenkostenProzent(total);
  }, [grunderwerb, makler, notar, grundbuch, sonstigeNebenkosten, kaufpreis]);

  // Auto-update wertsteigerung
  useEffect(() => {
    if (autoCalculateWertsteigerung) {
      const defaultValues: { [key: number]: string } = {
        10: '40',
        20: '80',
        30: '150',
      };
      setWertsteigerungProzent(defaultValues[haltedauer]);
    }
  }, [haltedauer, autoCalculateWertsteigerung]);

  // Bidirectional eigenkapital syncing
  useEffect(() => {
    const kp = parseFloat(kaufpreis) || 0;
    const nk = kp * ((parseFloat(nebenkostenProzent) || 0) / 100);

    if (eigenkapitalSource === 'prozent' && eigenkapitalProzent) {
      const prozent = (parseFloat(eigenkapitalProzent) || 0) / 100;
      const absolut = kp * prozent + nk;
      if (kp > 0) {
        setEigenkapitalAbsolut(absolut.toFixed(0));
      }
    } else if (eigenkapitalSource === 'absolut' && eigenkapitalAbsolut) {
      const absolut = parseFloat(eigenkapitalAbsolut) || 0;
      const prozent = kp > 0 ? ((absolut - nk) / kp) * 100 : 0;
      setEigenkapitalProzent(Math.max(0, prozent).toFixed(1));
    }
  }, [kaufpreis, nebenkostenProzent, eigenkapitalProzent, eigenkapitalAbsolut, eigenkapitalSource]);

  // Calculate completion percentage for progress bar
  const getCompletionPercentage = () => {
    // All fields that should be filled for a complete calculation
    const requiredFields = [
      { value: kaufpreis, filled: kaufpreis && kaufpreis.trim() !== '' },
      { value: monatlicheKaltmiete, filled: monatlicheKaltmiete && monatlicheKaltmiete.trim() !== '' },
      { value: 'ek', filled: (eigenkapitalProzent && eigenkapitalProzent.trim() !== '') || (eigenkapitalAbsolut && eigenkapitalAbsolut.trim() !== '') },
      { value: zinssatz, filled: zinssatz && zinssatz.trim() !== '' },
      { value: tilgung, filled: tilgung && tilgung.trim() !== '' },
      { value: wertsteigerungProzent, filled: wertsteigerungProzent && wertsteigerungProzent.trim() !== '' },
    ];

    const filledCount = requiredFields.filter(f => f.filled).length;

    return Math.round((filledCount / requiredFields.length) * 100);
  };

  const loadScenarios = async () => {
    if (!userId) return;

    try {
      setLoadingScenarios(true);
      const { data: scenariosData, error: scenariosError } = await supabase
        .from('scenarios')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (scenariosError) throw scenariosError;

      const scenariosWithDefaults: ScenarioWithMieterhoehungen[] = (scenariosData || []).map(scenario => ({
        ...scenario,
        miet_steigerung_prozent: scenario.miet_steigerung_prozent ?? 0.02,
        hausgeld_steigerung_prozent: scenario.hausgeld_steigerung_prozent ?? 0.02,
      }));

      setScenarios(scenariosWithDefaults);
    } catch (err: any) {
      console.error('Error loading scenarios:', err);
    } finally {
      setLoadingScenarios(false);
    }
  };

  const handleLoadScenario = (scenario: ScenarioWithMieterhoehungen) => {
    setKaufpreis(scenario.kaufpreis.toString());
    setWohnflaeche(scenario.wohnflaeche?.toString() || '');
    setFlaeche(scenario.flaeche?.toString() || '');
    setNebenkostenProzent((scenario.nebenkosten_prozent * 100).toFixed(2));
    setEigenkapitalProzent((scenario.eigenkapital_prozent * 100).toFixed(1));
    setEigenkapitalAbsolut(scenario.eigenkapital_absolut?.toString() || '');
    setEigenkapitalSource((scenario.eigenkapital_source as 'prozent' | 'absolut') || 'prozent');
    setZinssatz((scenario.zinssatz * 100).toFixed(2));
    setTilgung((scenario.tilgung * 100).toFixed(2));
    setMonatlicheKaltmiete(scenario.monatliche_kaltmiete.toString());
    setWohngeldUmlegbar(scenario.wohngeld_umlegbar.toString());
    setWohngeldNichtUmlegbar(scenario.wohngeld_nicht_umlegbar.toString());
    setHaltedauer(scenario.haltedauer as 10 | 20 | 30);
    setWertsteigerungProzent((scenario.wertsteigerung_prozent * 100).toFixed(0));
    setMietSteigerungProzent(((scenario.miet_steigerung_prozent ?? 0.02) * 100).toFixed(1));
    setHausgeldSteigerungProzent(((scenario.hausgeld_steigerung_prozent ?? 0.02) * 100).toFixed(1));
    setScenarioName(scenario.name);
    setEditingScenarioId(scenario.id);
    setMobileMenuOpen(false);
    setCurrentTab(1);
  };

  const handleDeleteScenario = async (scenarioId: string) => {
    if (!confirm('Möchtest du dieses Szenario wirklich löschen?')) return;

    try {
      const { error } = await supabase
        .from('scenarios')
        .delete()
        .eq('id', scenarioId);

      if (error) throw error;

      loadScenarios();
      if (editingScenarioId === scenarioId) {
        setEditingScenarioId(null);
        setScenarioName('');
      }
    } catch (err: any) {
      alert('Fehler beim Löschen: ' + err.message);
    }
  };

  const handleSave = async () => {
    if (!userId) {
      onLoginClick?.();
      return;
    }

    if (!scenarioName.trim()) {
      alert('Bitte gib einen Namen für das Szenario ein');
      return;
    }

    try {
      setSaving(true);

      const scenarioData = {
        name: scenarioName,
        kaufpreis: parseFloat(kaufpreis) || 0,
        wohnflaeche: parseFloat(wohnflaeche) || null,
        flaeche: parseFloat(flaeche) || null,
        nebenkosten_prozent: (parseFloat(nebenkostenProzent) || 0) / 100,
        eigenkapital_prozent: (parseFloat(eigenkapitalProzent) || 0) / 100,
        eigenkapital_absolut: parseFloat(eigenkapitalAbsolut) || 0,
        eigenkapital_source: eigenkapitalSource,
        zinssatz: (parseFloat(zinssatz) || 0) / 100,
        tilgung: (parseFloat(tilgung) || 0) / 100,
        monatliche_kaltmiete: parseFloat(monatlicheKaltmiete) || 0,
        wohngeld_umlegbar: parseFloat(wohngeldUmlegbar) || 0,
        wohngeld_nicht_umlegbar: parseFloat(wohngeldNichtUmlegbar) || 0,
        haltedauer,
        wertsteigerung_prozent: (parseFloat(wertsteigerungProzent) || 0) / 100,
        miet_steigerung_prozent: (parseFloat(mietSteigerungProzent) || 0) / 100,
        hausgeld_steigerung_prozent: (parseFloat(hausgeldSteigerungProzent) || 0) / 100,
      };

      if (editingScenarioId) {
        const { error: updateError } = await supabase
          .from('scenarios')
          .update(scenarioData)
          .eq('id', editingScenarioId);

        if (updateError) throw updateError;
        setSaveMessage('Szenario erfolgreich aktualisiert!');
      } else {
        const { error: insertError } = await supabase
          .from('scenarios')
          .insert({ ...scenarioData, user_id: userId });

        if (insertError) throw insertError;
        setSaveMessage('Szenario erfolgreich gespeichert!');
        setEditingScenarioId(null);
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

  const getCalculationResult = () => {
    try {
      const kp = parseFloat(kaufpreis) || 0;
      const wf = parseFloat(wohnflaeche) || null;
      const fl = parseFloat(flaeche) || null;
      const nk = (parseFloat(nebenkostenProzent) || 0) / 100;
      const ekp = (parseFloat(eigenkapitalProzent) || 0) / 100;
      const eka = parseFloat(eigenkapitalAbsolut) || 0;
      const zins = (parseFloat(zinssatz) || 0) / 100;
      const tilg = (parseFloat(tilgung) || 0) / 100;
      const mkm = parseFloat(monatlicheKaltmiete) || 0;
      const wu = parseFloat(wohngeldUmlegbar) || 0;
      const wnu = parseFloat(wohngeldNichtUmlegbar) || 0;
      const wp = (parseFloat(wertsteigerungProzent) || 0) / 100;
      const msp = (parseFloat(mietSteigerungProzent) || 0) / 100;
      const hsp = (parseFloat(hausgeldSteigerungProzent) || 0) / 100;

      if (kp <= 0 || mkm <= 0) return null;

      const inputs: InvestmentInputs = {
        kaufpreis: kp,
        wohnflaeche: wf,
        flaeche: fl,
        nebenkostenProzent: nk,
        eigenkapitalProzent: ekp,
        eigenkapitalAbsolut: eka,
        eigenkapitalSource: eigenkapitalSource,
        zinssatz: zins,
        tilgung: tilg,
        monatlicheKaltmiete: mkm,
        wohngeldUmlegbar: wu,
        wohngeldNichtUmlegbar: wnu,
        haltedauer: haltedauer,
        wertsteigerungProzent: wp,
        mietSteigerungProzent: msp,
        hausgeldSteigerungProzent: hsp,
      };

      return calculateInvestment(inputs);
    } catch (error) {
      console.error('Calculation error:', error);
      return null;
    }
  };

  const result = getCalculationResult();

  const tabs = [
    { id: 1, name: 'Immobilie', shortName: '1' },
    { id: 2, name: 'Miete', shortName: '2' },
    { id: 3, name: 'Finanzierung', shortName: '3' },
    { id: 4, name: 'Verkauf', shortName: '4' },
    { id: 5, name: 'Steuer', shortName: '5' },
  ];

  // Tab content renderer
  const renderTabContent = () => {
    switch (currentTab) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800 pb-2 border-b border-gray-200">
              Immobilie
            </h3>

            {/* Kaufpreis */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kaufpreis (€) *
              </label>
              <input
                type="number"
                value={kaufpreis}
                onChange={(e) => setKaufpreis(e.target.value)}
                className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                placeholder="z.B. 300000"
              />
            </div>

            {/* Wohnfläche */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Wohnfläche (m²) <span className="text-gray-400 font-normal">optional</span>
              </label>
              <input
                type="number"
                value={wohnflaeche}
                onChange={(e) => setWohnflaeche(e.target.value)}
                className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                placeholder="z.B. 70"
              />
            </div>

            {/* Nebenkosten */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Kaufnebenkosten (%)
                </label>
                <button
                  onClick={() => setNebenkostenExpanded(!nebenkostenExpanded)}
                  className="text-xs text-[#7099A3] hover:text-[#5d7e87] flex items-center gap-1"
                >
                  {nebenkostenExpanded ? 'Einfach' : 'Details'}
                  <ChevronDown className={`w-3 h-3 transition-transform ${nebenkostenExpanded ? 'rotate-180' : ''}`} />
                </button>
              </div>

              {!nebenkostenExpanded ? (
                <input
                  type="number"
                  step="0.01"
                  value={nebenkostenProzent}
                  onChange={(e) => setNebenkostenProzent(e.target.value)}
                  className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                  placeholder="z.B. 11.57"
                />
              ) : (
                <div className="space-y-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  {/* Bundesland Dropdown */}
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Grunderwerbsteuer (%)</label>
                    <select
                      value={selectedBundesland}
                      onChange={(e) => setSelectedBundesland(e.target.value)}
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] outline-none bg-white"
                    >
                      {GRUNDERWERBSTEUER_BUNDESLAENDER.map((bl) => (
                        <option key={bl.name} value={bl.name}>
                          {bl.name} ({bl.rate}%)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs text-gray-600 mb-0.5">Makler (%)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={makler}
                        onChange={(e) => setMakler(e.target.value)}
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] outline-none"
                        placeholder="3.57"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-0.5">Notar (%)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={notar}
                        onChange={(e) => setNotar(e.target.value)}
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] outline-none"
                        placeholder="1.5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-0.5">Grundbuch (%)</label>
                      <input
                        type="number"
                        step="0.01"
                        value={grundbuch}
                        onChange={(e) => setGrundbuch(e.target.value)}
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] outline-none"
                        placeholder="0.5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-0.5">Sonstige (€)</label>
                      <input
                        type="number"
                        value={sonstigeNebenkosten}
                        onChange={(e) => setSonstigeNebenkosten(e.target.value)}
                        className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] outline-none"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="pt-2 border-t border-gray-300 text-sm font-medium text-gray-700">
                    Gesamt: {nebenkostenProzent}%
                    {kaufpreis && (
                      <span className="text-gray-500 font-normal ml-2">
                        (€{((parseFloat(kaufpreis) || 0) * (parseFloat(nebenkostenProzent) || 0) / 100).toLocaleString('de-DE', { maximumFractionDigits: 0 })})
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Gesamtkosten */}
            {kaufpreis && (
              <div className="p-3 bg-[#7099A3]/10 rounded-lg border border-[#7099A3]/20">
                <div className="text-sm text-gray-600">Gesamtkosten</div>
                <div className="text-lg font-semibold text-gray-800">
                  €{(() => {
                    const kp = parseFloat(kaufpreis) || 0;
                    const nk = kp * ((parseFloat(nebenkostenProzent) || 0) / 100);
                    return (kp + nk).toLocaleString('de-DE', { maximumFractionDigits: 0 });
                  })()}
                </div>
                <div className="text-xs text-gray-500">
                  Kaufpreis + Nebenkosten
                </div>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800 pb-2 border-b border-gray-200">
              Miete & Nebenkosten
            </h3>

            {/* Kaltmiete */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monatliche Kaltmiete (€) *
              </label>
              <input
                type="number"
                value={monatlicheKaltmiete}
                onChange={(e) => setMonatlicheKaltmiete(e.target.value)}
                className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                placeholder="z.B. 900"
              />
            </div>

            {/* Hausgeld */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hausgeld gesamt (€) <span className="text-gray-400 font-normal">optional</span>
                </label>
                <input
                  type="number"
                  value={wohngeldUmlegbar}
                  onChange={(e) => setWohngeldUmlegbar(e.target.value)}
                  className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                  placeholder="z.B. 200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nicht umlegbar (€)
                </label>
                <div className="flex gap-1">
                  <input
                    type="number"
                    value={wohngeldNichtUmlegbar}
                    onChange={(e) => {
                      setWohngeldNichtUmlegbar(e.target.value);
                      setAutoCalculateNichtUmlegbar(false);
                    }}
                    className="flex-1 px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                    placeholder="z.B. 60"
                  />
                  <button
                    onClick={() => {
                      if (!wohngeldUmlegbar) {
                        alert('Bitte zuerst Hausgeld gesamt eingeben');
                        return;
                      }
                      setAutoCalculateNichtUmlegbar(true);
                    }}
                    className={`px-2 py-2 text-xs rounded-lg transition-colors ${autoCalculateNichtUmlegbar
                      ? 'bg-[#7099A3] text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    title="Auto (~30%)"
                  >
                    Auto
                  </button>
                </div>
              </div>
            </div>

            {/* Jährliche Steigerungen */}
            <div className="pt-3 border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jährliche Steigerungen
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-0.5">Mietsteigerung p.a.</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={mietSteigerungProzent}
                      onChange={(e) => setMietSteigerungProzent(e.target.value)}
                      className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none pr-8"
                      placeholder="2"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">%</span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-0.5">Kostensteigerung p.a.</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={hausgeldSteigerungProzent}
                      onChange={(e) => setHausgeldSteigerungProzent(e.target.value)}
                      className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none pr-8"
                      placeholder="2.5"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800 pb-2 border-b border-gray-200">
              Finanzierung
            </h3>

            {/* Eigenkapital */}
            <div>
              <div className="flex items-center gap-1 mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Eigenkapital
                </label>
                <div className="relative group">
                  <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute left-0 top-full mt-1 w-64 p-2.5 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    Die % beziehen sich auf den Kaufpreis. Die Kaufnebenkosten müssen immer als Eigenkapital mitgebracht werden.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <input
                    type="number"
                    step="0.1"
                    value={eigenkapitalProzent}
                    onChange={(e) => {
                      setEigenkapitalProzent(e.target.value);
                      setEigenkapitalSource('prozent');
                    }}
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                    placeholder="z.B. 20"
                  />
                  <span className="text-xs text-gray-500">in % vom Kaufpreis</span>
                </div>
                <div>
                  <input
                    type="number"
                    value={eigenkapitalAbsolut}
                    onChange={(e) => {
                      setEigenkapitalAbsolut(e.target.value);
                      setEigenkapitalSource('absolut');
                    }}
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                    placeholder="z.B. 95000"
                  />
                  <span className="text-xs text-gray-500">
                    in € (inkl. €{(() => {
                      const kp = parseFloat(kaufpreis) || 0;
                      const nk = kp * ((parseFloat(nebenkostenProzent) || 0) / 100);
                      return nk.toLocaleString('de-DE', { maximumFractionDigits: 0 });
                    })()} Nebenkosten)
                  </span>
                </div>
              </div>
            </div>

            {/* Zinssatz & Tilgung */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sollzinssatz (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={zinssatz}
                  onChange={(e) => setZinssatz(e.target.value)}
                  className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                  placeholder="z.B. 3.5"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tilgung (%)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={tilgung}
                  onChange={(e) => setTilgung(e.target.value)}
                  className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                  placeholder="2"
                />
              </div>
            </div>

            {/* Finanzierungsbedarf & Annuität */}
            {kaufpreis && (eigenkapitalProzent || eigenkapitalAbsolut) && (
              <div className="space-y-3">
                {/* Finanzierungsbedarf */}
                <div className="p-3 bg-[#7099A3]/10 rounded-lg border border-[#7099A3]/20">
                  <div className="text-sm text-gray-600">Finanzierungsbedarf</div>
                  <div className="text-lg font-semibold text-gray-800">
                    €{(() => {
                      const kp = parseFloat(kaufpreis) || 0;
                      const nk = kp * ((parseFloat(nebenkostenProzent) || 0) / 100);
                      const gesamtkosten = kp + nk;
                      const ek = parseFloat(eigenkapitalAbsolut) || (kp * ((parseFloat(eigenkapitalProzent) || 0) / 100) + nk);
                      const finanzierungsbedarf = Math.max(0, gesamtkosten - ek);
                      return finanzierungsbedarf.toLocaleString('de-DE', { maximumFractionDigits: 0 });
                    })()}
                  </div>
                  <div className="text-xs text-gray-500">
                    Gesamtkosten − Eigenkapital
                  </div>
                </div>

                {/* Berechnete Annuität */}
                {zinssatz && tilgung && (
                  <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-sm text-gray-600">Monatliche Rate (Annuität)</div>
                    <div className="text-lg font-semibold text-gray-800">
                      €{(() => {
                        const kp = parseFloat(kaufpreis) || 0;
                        const nk = kp * ((parseFloat(nebenkostenProzent) || 0) / 100);
                        const gesamtkosten = kp + nk;
                        const ek = parseFloat(eigenkapitalAbsolut) || (kp * ((parseFloat(eigenkapitalProzent) || 0) / 100) + nk);
                        const darlehen = Math.max(0, gesamtkosten - ek);
                        const zins = (parseFloat(zinssatz) || 0) / 100;
                        const tilg = (parseFloat(tilgung) || 0) / 100;
                        const annuitaet = (darlehen * (zins + tilg)) / 12;
                        return annuitaet.toLocaleString('de-DE', { maximumFractionDigits: 0 });
                      })()}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-800 pb-2 border-b border-gray-200">
              Verkauf & Haltedauer
            </h3>

            {/* Haltedauer */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Geplante Haltedauer
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[10, 20, 30].map((years) => (
                  <button
                    key={years}
                    onClick={() => setHaltedauer(years as 10 | 20 | 30)}
                    className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all ${haltedauer === years
                      ? 'border-[#7099A3] bg-[#7099A3]/10 text-[#7099A3]'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                  >
                    {years} Jahre
                  </button>
                ))}
              </div>
            </div>

            {/* Wertsteigerung */}
            <div>
              <div className="flex items-center gap-1 mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Erwartete Wertsteigerung (%)
                </label>
                <div className="relative group">
                  <svg className="w-4 h-4 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="absolute left-0 top-full mt-1 w-72 p-2.5 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    Die Auto-Werte basieren auf historischen Durchschnittswerten für Wohnimmobilien in Deutschland (~2-3% p.a.).
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="number"
                    step="1"
                    value={wertsteigerungProzent}
                    onChange={(e) => {
                      setWertsteigerungProzent(e.target.value);
                      setAutoCalculateWertsteigerung(false);
                    }}
                    className="w-full px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none pr-8"
                    placeholder="80"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">%</span>
                </div>
                <button
                  onClick={() => setAutoCalculateWertsteigerung(true)}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${autoCalculateWertsteigerung
                    ? 'bg-[#7099A3] text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                >
                  Auto
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {wertsteigerungProzent}% = Verkaufspreis von €{kaufpreis ? ((parseFloat(kaufpreis) || 0) * (1 + (parseFloat(wertsteigerungProzent) || 0) / 100)).toLocaleString('de-DE', { maximumFractionDigits: 0 }) : '—'}
              </p>
            </div>

            {/* Save Section (only for logged-in users) */}
            {userId && (
              <div className="pt-4 border-t border-gray-200">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {editingScenarioId ? 'Szenario aktualisieren' : 'Szenario speichern'}
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={scenarioName}
                    onChange={(e) => setScenarioName(e.target.value)}
                    placeholder="Name eingeben..."
                    className="flex-1 px-3 py-2 text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                  />
                  <button
                    onClick={handleSave}
                    disabled={saving}
                    className="px-4 py-2 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] disabled:opacity-50 flex items-center gap-2"
                  >
                    <Save className="w-4 h-4" />
                    {saving ? '...' : 'Speichern'}
                  </button>
                </div>
                {editingScenarioId && (
                  <button
                    onClick={() => {
                      setEditingScenarioId(null);
                      setScenarioName('');
                    }}
                    className="mt-2 text-sm text-gray-600 hover:text-gray-800"
                  >
                    Abbrechen
                  </button>
                )}
                {saveMessage && (
                  <p className="mt-2 text-sm text-green-600">{saveMessage}</p>
                )}
              </div>
            )}
          </div>
        );

      case 5:
        return (
          <SteuerSection
            kaufpreis={parseFloat(kaufpreis) || 0}
            monatlicheKaltmiete={parseFloat(monatlicheKaltmiete) || 0}
            wohngeldNichtUmlegbar={parseFloat(wohngeldNichtUmlegbar) || 0}
            zinssatz={(parseFloat(zinssatz) || 0) / 100}
            tilgung={(parseFloat(tilgung) || 0) / 100}
            eigenkapitalAbsolut={parseFloat(eigenkapitalAbsolut) || 0}
            nebenkostenProzent={(parseFloat(nebenkostenProzent) || 0) / 100}
            haltedauer={haltedauer}
            mietSteigerung={(parseFloat(mietSteigerungProzent) || 0) / 100}
            hausgeldSteigerung={(parseFloat(hausgeldSteigerungProzent) || 0) / 100}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Mobile Overlay for Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu */}
      {userId && (
        <div className={`
          fixed md:hidden
          top-0 left-0 h-full
          w-72
          bg-[#7099A3]
          transform transition-transform duration-300 ease-in-out
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          z-50
          flex flex-col
          overflow-hidden
        `}>
          <div className="p-4 border-b border-white/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">IR</span>
              </div>
              <h1 className="text-base font-semibold text-white">Immobilien Rechner</h1>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 hover:bg-white/10 rounded-lg">
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="mt-4 border-t border-white/20 pt-4">
              <button
                onClick={() => setScenariosOpen(!scenariosOpen)}
                className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
              >
                <span className="text-sm font-medium text-white">Gespeicherte Szenarien</span>
                <ChevronDown className={`w-4 h-4 text-white transition-transform ${scenariosOpen ? 'rotate-180' : ''}`} />
              </button>

              {scenariosOpen && (
                <div className="pb-2">
                  {loadingScenarios ? (
                    <div className="px-4 py-2 text-xs text-white/60">Lädt...</div>
                  ) : scenarios.length === 0 ? (
                    <div className="px-4 py-2 text-xs text-white/60">Keine Szenarien gespeichert</div>
                  ) : (
                    <div className="space-y-1 px-2">
                      {scenarios.map((scenario) => (
                        <div key={scenario.id} className="group hover:bg-white/5 rounded">
                          <div className="flex items-start justify-between gap-2 px-2 py-2">
                            <button onClick={() => handleLoadScenario(scenario)} className="flex-1 text-left">
                              <div className="text-xs font-medium text-white truncate">{scenario.name}</div>
                              <div className="text-[10px] text-white/60 mt-0.5">
                                €{scenario.kaufpreis.toLocaleString('de-DE')}
                              </div>
                            </button>
                            <button
                              onClick={() => handleDeleteScenario(scenario.id)}
                              className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-opacity"
                            >
                              <X className="w-3 h-3 text-white" />
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

          <div className="p-4 border-t border-white/20 space-y-3">
            <div className="text-xs text-white/80 truncate">{userEmail}</div>
            <button
              onClick={() => { onSignOut?.(); setMobileMenuOpen(false); }}
              className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors"
            >
              Abmelden
            </button>
          </div>
        </div>
      )}

      {/* Desktop Sidebar (only for logged-in users) */}
      {userId && (
        <div className="hidden md:flex md:w-56 bg-[#7099A3] flex-col h-full overflow-hidden flex-shrink-0">
          <div className="p-4 border-b border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/20 rounded flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">IR</span>
              </div>
              <h1 className="text-base font-semibold text-white">Immobilien Rechner</h1>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="mt-4 border-t border-white/20 pt-4">
              <button
                onClick={() => setScenariosOpen(!scenariosOpen)}
                className="w-full px-4 py-2.5 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
              >
                <span className="text-sm font-medium text-white">Gespeicherte Szenarien</span>
                <ChevronDown className={`w-4 h-4 text-white transition-transform ${scenariosOpen ? 'rotate-180' : ''}`} />
              </button>

              {scenariosOpen && (
                <div className="pb-2">
                  {loadingScenarios ? (
                    <div className="px-4 py-2 text-xs text-white/60">Lädt...</div>
                  ) : scenarios.length === 0 ? (
                    <div className="px-4 py-2 text-xs text-white/60">Keine Szenarien gespeichert</div>
                  ) : (
                    <div className="space-y-1 px-2">
                      {scenarios.map((scenario) => (
                        <div key={scenario.id} className="group hover:bg-white/5 rounded">
                          <div className="flex items-start justify-between gap-2 px-2 py-2">
                            <button onClick={() => handleLoadScenario(scenario)} className="flex-1 text-left">
                              <div className="text-xs font-medium text-white truncate">{scenario.name}</div>
                              <div className="text-[10px] text-white/60 mt-0.5">
                                €{scenario.kaufpreis.toLocaleString('de-DE')}
                              </div>
                            </button>
                            <button
                              onClick={() => handleDeleteScenario(scenario.id)}
                              className="opacity-0 group-hover:opacity-100 p-1 hover:bg-white/10 rounded transition-opacity"
                            >
                              <X className="w-3 h-3 text-white" />
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

          <div className="p-3 border-t border-white/20">
            <div className="text-xs text-white/80 mb-2 truncate">{userEmail}</div>
            <button
              onClick={onSignOut}
              className="w-full px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded transition-colors"
            >
              Abmelden
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* Top Navbar */}
        <nav className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm w-full">
          <div className="px-3 md:px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3 min-w-0">
                {userId && (
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
                  >
                    <Menu className="w-5 h-5 text-gray-700" />
                  </button>
                )}

                <a href="/" className="flex items-center gap-2 min-w-0 hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5 text-[#7099A3] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <h1 className="text-base md:text-lg font-bold text-gray-800 truncate">Immobilien Rechner</h1>
                </a>
              </div>

              <div className="flex items-center gap-2 md:gap-4">
                {userId ? (
                  <>
                    <span className="hidden md:block text-sm text-gray-600">{userEmail}</span>
                    <button
                      onClick={onSignOut}
                      className="hidden md:block px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      Abmelden
                    </button>
                  </>
                ) : (
                  <button
                    onClick={onLoginClick}
                    className="px-4 py-2 text-sm bg-[#7099A3] text-white hover:bg-[#5d7e87] rounded-lg transition-colors flex items-center gap-2"
                  >
                    <LogIn className="w-4 h-4" />
                    <span className="hidden sm:inline">Anmelden</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-50">
          <div className="w-full max-w-7xl mx-auto p-3 md:p-6">
            {/* Two-Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

              {/* Left Column - Input Form with Tabs */}
              <div className="space-y-4">
                {/* Progress Bar - Only above input */}
                <div className="bg-white rounded-lg shadow border border-gray-200 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Fortschritt</span>
                    <span className="text-sm text-gray-500">{getCompletionPercentage()}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#7099A3] transition-all duration-300"
                      style={{ width: `${getCompletionPercentage()}%` }}
                    />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
                  {/* Tab Navigation */}
                  <div className="flex border-b border-gray-200">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setCurrentTab(tab.id)}
                        className={`flex-1 py-3 px-2 text-xs sm:text-sm font-medium transition-colors relative ${currentTab === tab.id
                          ? 'text-[#7099A3] bg-[#7099A3]/5'
                          : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                          }`}
                      >
                        <span className="hidden sm:inline">{tab.name}</span>
                        <span className="sm:hidden">{tab.shortName}</span>
                        {currentTab === tab.id && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7099A3]" />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Tab Content */}
                  <div className="p-4 md:p-5">
                    {renderTabContent()}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="px-4 md:px-5 pb-4 md:pb-5 flex justify-between">
                    <button
                      onClick={() => setCurrentTab(Math.max(1, currentTab - 1))}
                      disabled={currentTab === 1}
                      className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${currentTab === 1
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                      Zurück
                    </button>

                    {currentTab < 5 ? (
                      <button
                        onClick={() => setCurrentTab(Math.min(5, currentTab + 1))}
                        className="px-4 py-2 bg-[#7099A3] text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#5d7e87] transition-colors"
                      >
                        Weiter
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 text-sm text-green-600">
                        <Check className="w-4 h-4" />
                        Fertig
                      </div>
                    )}
                  </div>
                </div>

                {/* Guest Banner */}
                {isGuest && (
                  <div className="bg-gradient-to-r from-[#7099A3]/10 to-[#5d7e87]/10 rounded-lg p-4 border border-[#7099A3]/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-800">Szenarien speichern?</p>
                        <p className="text-xs text-gray-600">Melde dich an, um deine Berechnungen zu speichern.</p>
                      </div>
                      <button
                        onClick={onLoginClick}
                        className="px-4 py-2 bg-[#7099A3] text-white rounded-lg text-sm font-medium hover:bg-[#5d7e87] transition-colors flex items-center gap-2"
                      >
                        <LogIn className="w-4 h-4" />
                        Anmelden
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column - Results */}
              <div className="space-y-4">
                {result ? (
                  <>
                    <ResultsDisplay result={result} />
                    <CashflowChart result={result} />
                  </>
                ) : (
                  <div className="bg-white rounded-lg shadow border border-gray-200 p-8 text-center">
                    <div className="text-gray-400 mb-3">
                      <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Fülle die Pflichtfelder aus, um die Berechnung zu sehen
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                      Kaufpreis und Kaltmiete sind erforderlich
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
