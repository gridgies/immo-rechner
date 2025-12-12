'use client';

import { useState, useEffect } from 'react';
import { InvestmentInputs, Mieterhoehung } from '@/lib/types';
import { calculateInvestment } from '@/lib/calculator';
import { createClient } from '@/lib/supabase/client';
import { ScenarioWithMieterhoehungen } from '@/lib/types/database';
import ResultsDisplay from './ResultsDisplay';
import { Menu, X, ChevronDown } from 'lucide-react';

interface InvestmentFormWithSaveProps {
  userId: string;
  userEmail: string;
  onSignOut: () => void;
}

export default function InvestmentFormWithSave({ userId, userEmail, onSignOut }: InvestmentFormWithSaveProps) {
  // Form state - empty for new users
  const [kaufpreis, setKaufpreis] = useState<string>('');
  const [wohnflaeche, setWohnflaeche] = useState<string>('');
  const [flaeche, setFlaeche] = useState<string>(''); // Fläche in m²
  const [nebenkostenProzent, setNebenkostenProzent] = useState<string>('');
  
  // Nebenkosten breakdown - SIMPLIFIED for mobile
  const [nebenkostenExpanded, setNebenkostenExpanded] = useState(false);
  const [grunderwerb, setGrunderwerb] = useState<string>('6.0');
  const [makler, setMakler] = useState<string>('3.57');
  const [notar, setNotar] = useState<string>('1.5');
  const [grundbuch, setGrundbuch] = useState<string>('0.5');
  
  const [eigenkapitalProzent, setEigenkapitalProzent] = useState<string>('');
  const [eigenkapitalAbsolut, setEigenkapitalAbsolut] = useState<string>(''); // Absolute eigenkapital
  const [eigenkapitalSource, setEigenkapitalSource] = useState<'prozent' | 'absolut'>('prozent'); // Track which was edited last
  const [zinssatz, setZinssatz] = useState<string>('');
  const [tilgung, setTilgung] = useState<string>('');
  const [monatlicheKaltmiete, setMonatlicheKaltmiete] = useState<string>('');
  const [wohngeldUmlegbar, setWohngeldUmlegbar] = useState<string>('');
  const [wohngeldNichtUmlegbar, setWohngeldNichtUmlegbar] = useState<string>('');
  const [haltedauer, setHaltedauer] = useState<10 | 20 | 30>(30);
  const [wertsteigerungProzent, setWertsteigerungProzent] = useState<string>('');
  const [mieterhoehungen, setMieterhoehungen] = useState<Mieterhoehung[]>([]);

  const [scenarioName, setScenarioName] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [editingScenarioId, setEditingScenarioId] = useState<string | null>(null);

  // Saved scenarios state
  const [scenarios, setScenarios] = useState<ScenarioWithMieterhoehungen[]>([]);
  const [scenariosOpen, setScenariosOpen] = useState(true);
  const [loadingScenarios, setLoadingScenarios] = useState(false);

  // Mobile states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        // Default assumption: ~30% of total Hausgeld is nicht umlegbar
        // User can override this with actual value if known
        setWohngeldNichtUmlegbar((umlegbar * 0.3).toFixed(2));
      }
    }
  }, [wohngeldUmlegbar, autoCalculateNichtUmlegbar]);

  // Auto-calculate total nebenkostenProzent from breakdown
  useEffect(() => {
    const total = (
      (parseFloat(grunderwerb) || 0) +
      (parseFloat(makler) || 0) +
      (parseFloat(notar) || 0) +
      (parseFloat(grundbuch) || 0)
    ).toFixed(2);
    setNebenkostenProzent(total);
  }, [grunderwerb, makler, notar, grundbuch]);

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

  // Bidirectional eigenkapital syncing
  useEffect(() => {
    const kp = parseFloat(kaufpreis) || 0;
    const nk = kp * ((parseFloat(nebenkostenProzent) || 0) / 100);
    
    if (eigenkapitalSource === 'prozent') {
      // User edited %, calculate absolut
      const prozent = (parseFloat(eigenkapitalProzent) || 0) / 100;
      const absolut = kp * prozent + nk;
      setEigenkapitalAbsolut(absolut.toFixed(2));
    } else {
      // User edited absolut, calculate %
      const absolut = parseFloat(eigenkapitalAbsolut) || 0;
      const prozent = kp > 0 ? ((absolut - nk) / kp) * 100 : 0;
      setEigenkapitalProzent(Math.max(0, prozent).toFixed(2));
    }
  }, [kaufpreis, nebenkostenProzent, eigenkapitalProzent, eigenkapitalAbsolut, eigenkapitalSource]);

  // Initialize eigenkapitalAbsolut on first load
  useEffect(() => {
    if (!eigenkapitalAbsolut) {
      const kp = parseFloat(kaufpreis) || 0;
      const nk = kp * ((parseFloat(nebenkostenProzent) || 0) / 100);
      const prozent = (parseFloat(eigenkapitalProzent) || 0) / 100;
      const absolut = kp * prozent + nk;
      setEigenkapitalAbsolut(absolut.toFixed(2));
    }
  }, []);

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
    setMieterhoehungen([...mieterhoehungen, { nachMonaten: 0, prozent: 0 }]);
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
    setWohnflaeche(scenario.wohnflaeche?.toString() || '');
    setFlaeche(scenario.flaeche?.toString() || '');
    setNebenkostenProzent((scenario.nebenkosten_prozent * 100).toFixed(2));
    setEigenkapitalProzent((scenario.eigenkapital_prozent * 100).toFixed(2));
    setEigenkapitalAbsolut(scenario.eigenkapital_absolut.toString());
    setEigenkapitalSource(scenario.eigenkapital_source as 'prozent' | 'absolut');
    setZinssatz((scenario.zinssatz * 100).toFixed(2));
    setTilgung((scenario.tilgung * 100).toFixed(2));
    setMonatlicheKaltmiete(scenario.monatliche_kaltmiete.toString());
    setWohngeldUmlegbar(scenario.wohngeld_umlegbar.toString());
    setWohngeldNichtUmlegbar(scenario.wohngeld_nicht_umlegbar.toString());
    setHaltedauer(scenario.haltedauer as 10 | 20 | 30);
    setWertsteigerungProzent((scenario.wertsteigerung_prozent * 100).toFixed(2));
    
    // Load mieterhoehungen
    const loadedMieterhoehungen = scenario.mieterhoehungen?.map(m => ({
      nachMonaten: m.nach_monaten,
      prozent: m.prozent,
    })) || [];
    setMieterhoehungen(loadedMieterhoehungen);
    
    setScenarioName(scenario.name);
    setEditingScenarioId(scenario.id);
    setMobileMenuOpen(false); // Close mobile menu after loading
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
    if (!scenarioName.trim()) {
      alert('Bitte gib einen Namen für das Szenario ein');
      return;
    }

    try {
      setSaving(true);

      if (editingScenarioId) {
        // Update existing scenario
        const { error: updateError } = await supabase
          .from('scenarios')
          .update({
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
          })
          .eq('id', editingScenarioId);

        if (updateError) throw updateError;

        // Delete old mieterhoehungen and insert new ones
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
      } else {
        // Create new scenario
        const { data: scenarioData, error: scenarioError } = await supabase
          .from('scenarios')
          .insert({
            user_id: userId,
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
        mieterhoehungen: mieterhoehungen,
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
      {/* Mobile Overlay for Menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Slide-in Menu (Full navigation + scenarios) */}
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
        {/* Logo & Close Button */}
        <div className="p-4 border-b border-white/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">IR</span>
            </div>
            <h1 className="text-base font-semibold text-white">
              Immobilien Rechner
            </h1>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 hover:bg-white/10 rounded-lg"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Navigation Items + Scenarios */}
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
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform ${scenariosOpen ? 'rotate-180' : ''}`}
              />
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

        {/* User Info at Bottom */}
        <div className="p-4 border-t border-white/20 space-y-3">
          <div className="text-xs text-white/80 truncate">
            {userEmail}
          </div>
          <button
            onClick={() => {
              onSignOut();
              setMobileMenuOpen(false);
            }}
            className="w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-lg transition-colors"
          >
            Abmelden
          </button>
        </div>
      </div>

      {/* Desktop Sidebar (unchanged) */}
      <div className="hidden md:flex md:w-52 bg-[#7099A3] flex-col h-full overflow-hidden">
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
              <ChevronDown
                className={`w-4 h-4 text-white transition-transform ${scenariosOpen ? 'rotate-180' : ''}`}
              />
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

        {/* User Info at Bottom (Desktop) */}
        <div className="p-3 border-t border-white/20">
          <div className="text-xs text-white/80 mb-2 truncate">
            {userEmail}
          </div>
          <button
            onClick={onSignOut}
            className="w-full px-3 py-2 bg-white/10 hover:bg-white/20 text-white text-xs rounded transition-colors"
          >
            Abmelden
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Navbar - Responsive & Clean */}
        <nav className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="px-4 md:px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Left: Mobile Hamburger Menu Button */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Menu"
                >
                  <Menu className="w-5 h-5 text-gray-700" />
                </button>
                
                {/* Mobile: Show Logo */}
                <div className="flex items-center gap-2 md:hidden">
                  <svg className="w-6 h-6 text-[#7099A3]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <h1 className="text-lg font-bold text-gray-800">Immobilien Rechner</h1>
                </div>

                {/* Desktop: Show Page Title */}
                <div className="hidden md:block">
                  <h2 className="text-lg font-semibold text-gray-800">Cashflow Rechner</h2>
                </div>
              </div>

              {/* Right: Desktop User Info */}
              <div className="hidden md:flex items-center gap-4">
                <span className="text-sm text-gray-600">{userEmail}</span>
                <button
                  onClick={onSignOut}
                  className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  Abmelden
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <div className="max-w-7xl mx-auto p-4 md:p-6">
            {/* Responsive Grid: Stacked on mobile, 2-column on desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              
              {/* Left Column - Input Form */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow border border-gray-200">
                  <div className="p-4 md:p-5">
                    <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-4 md:mb-5 pb-3 border-b border-gray-200">
                      Immobilien-Daten
                    </h2>

                    <div className="space-y-5 md:space-y-6">
                      
                      {/* ========== KATEGORIE 1: IMMOBILIE ========== */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                          Immobilie
                        </h3>
                        
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
                              placeholder="z.B. 300000"
                            />
                          </div>

                          {/* Wohnfläche (optional) */}
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Wohnfläche (m²) <span className="text-gray-400 font-normal">optional</span>
                            </label>
                            <input
                              type="number"
                              value={wohnflaeche}
                              onChange={(e) => setWohnflaeche(e.target.value)}
                              className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                              placeholder="z.B. 85"
                            />
                          </div>

                          {/* Grundstücksfläche (optional) */}
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Grundstücksfläche (m²) <span className="text-gray-400 font-normal">optional</span>
                            </label>
                            <input
                              type="number"
                              value={flaeche}
                              onChange={(e) => setFlaeche(e.target.value)}
                              className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                              placeholder="z.B. 400"
                            />
                          </div>

                          {/* Nebenkosten - SIMPLIFIED */}
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <label className="block text-xs font-medium text-gray-700">
                                Kaufnebenkosten (%)
                              </label>
                              <button
                                onClick={() => setNebenkostenExpanded(!nebenkostenExpanded)}
                                className="text-xs text-[#7099A3] hover:text-[#5d7e87] flex items-center gap-1"
                              >
                                {nebenkostenExpanded ? 'Einfache Ansicht' : 'Details'}
                                <ChevronDown className={`w-3 h-3 transition-transform ${nebenkostenExpanded ? 'rotate-180' : ''}`} />
                              </button>
                            </div>
                            
                            {!nebenkostenExpanded ? (
                              <input
                                type="number"
                                step="0.01"
                                value={nebenkostenProzent}
                                onChange={(e) => setNebenkostenProzent(e.target.value)}
                                className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                                placeholder="z.B. 11.57"
                              />
                            ) : (
                              <div className="space-y-2 p-3 bg-gray-50 rounded border border-gray-200">
                                <div className="grid grid-cols-2 gap-2 text-xs">
                                  <div>
                                    <label className="block text-gray-600 mb-0.5">Grunderwerbsteuer</label>
                                    <input
                                      type="number"
                                      step="0.01"
                                      value={grunderwerb}
                                      onChange={(e) => setGrunderwerb(e.target.value)}
                                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] outline-none"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-gray-600 mb-0.5">Makler</label>
                                    <input
                                      type="number"
                                      step="0.01"
                                      value={makler}
                                      onChange={(e) => setMakler(e.target.value)}
                                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] outline-none"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-gray-600 mb-0.5">Notar</label>
                                    <input
                                      type="number"
                                      step="0.01"
                                      value={notar}
                                      onChange={(e) => setNotar(e.target.value)}
                                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] outline-none"
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-gray-600 mb-0.5">Grundbuch</label>
                                    <input
                                      type="number"
                                      step="0.01"
                                      value={grundbuch}
                                      onChange={(e) => setGrundbuch(e.target.value)}
                                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] outline-none"
                                    />
                                  </div>
                                </div>
                                <div className="pt-2 border-t border-gray-300 text-xs font-medium text-gray-700">
                                  Gesamt: {nebenkostenProzent}%
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* ========== KATEGORIE 2: FINANZIERUNG & MIETE ========== */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                          Finanzierung & Miete
                        </h3>
                        
                        <div className="space-y-2.5">
                          {/* Eigenkapital - Bidirectional */}
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Eigenkapital
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <input
                                  type="number"
                                  step="0.01"
                                  value={eigenkapitalProzent}
                                  onChange={(e) => {
                                    setEigenkapitalProzent(e.target.value);
                                    setEigenkapitalSource('prozent');
                                  }}
                                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                                  placeholder="20"
                                />
                                <span className="text-[10px] text-gray-500">in %</span>
                              </div>
                              <div>
                                <input
                                  type="number"
                                  value={eigenkapitalAbsolut}
                                  onChange={(e) => {
                                    setEigenkapitalAbsolut(e.target.value);
                                    setEigenkapitalSource('absolut');
                                  }}
                                  className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                                  placeholder="60000"
                                />
                                <span className="text-[10px] text-gray-500">in €</span>
                              </div>
                            </div>
                          </div>

                          {/* Zinssatz */}
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Zinssatz (%)
                            </label>
                            <input
                              type="number"
                              step="0.01"
                              value={zinssatz}
                              onChange={(e) => setZinssatz(e.target.value)}
                              className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                              placeholder="z.B. 3.5"
                            />
                          </div>

                          {/* Tilgung */}
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Tilgung (%)
                            </label>
                            <input
                              type="number"
                              step="0.01"
                              value={tilgung}
                              onChange={(e) => setTilgung(e.target.value)}
                              className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                              placeholder="z.B. 2"
                            />
                          </div>

                          {/* Monatliche Kaltmiete */}
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Monatliche Kaltmiete (€)
                            </label>
                            <input
                              type="number"
                              value={monatlicheKaltmiete}
                              onChange={(e) => setMonatlicheKaltmiete(e.target.value)}
                              className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                              placeholder="z.B. 1200"
                            />
                          </div>

                          {/* Wohngeld/Hausgeld */}
                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Hausgeld umlegbar (€/Monat)
                            </label>
                            <input
                              type="number"
                              value={wohngeldUmlegbar}
                              onChange={(e) => setWohngeldUmlegbar(e.target.value)}
                              className="w-full px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                              placeholder="z.B. 150"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-medium text-gray-700 mb-1">
                              Hausgeld nicht umlegbar (€/Monat)
                            </label>
                            <div className="flex gap-1.5">
                              <input
                                type="number"
                                value={wohngeldNichtUmlegbar}
                                onChange={(e) => {
                                  setWohngeldNichtUmlegbar(e.target.value);
                                  setAutoCalculateNichtUmlegbar(false);
                                }}
                                className="flex-1 px-2.5 py-1.5 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                                placeholder="z.B. 45"
                              />
                              <button
                                onClick={() => setAutoCalculateNichtUmlegbar(true)}
                                className="px-2 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded"
                                title="Auto (30% von umlegbar)"
                              >
                                Auto
                              </button>
                            </div>
                          </div>

                          {/* Mieterhöhungen */}
                          <div className="pt-2 border-t border-gray-200">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-1">
                                <label className="text-xs font-medium text-gray-700">
                                  Mieterhöhungen
                                </label>
                                <div className="relative group">
                                  <svg className="w-3.5 h-3.5 text-gray-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  <div className="absolute left-0 top-full mt-1 w-56 p-2.5 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                                    Bitte lokalen Mietspiegel und Kappungsgrenze beachten
                                  </div>
                                </div>
                              </div>
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
                                  <div className="flex-1">
                                    <input
                                      type="number"
                                      value={erhoehung.nachMonaten}
                                      onChange={(e) =>
                                        updateMieterhoehung(index, 'nachMonaten', parseInt(e.target.value))
                                      }
                                      placeholder="Monat"
                                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                                    />
                                    <span className="text-[10px] text-gray-500">Monat</span>
                                  </div>
                                  <span className="text-xs text-gray-400">→</span>
                                  <div className="flex-1">
                                    <input
                                      type="number"
                                      step="0.01"
                                      min="0"
                                      max="100"
                                      value={erhoehung.prozent * 100}
                                      onChange={(e) => {
                                        const value = e.target.value;
                                        if (value === '' || !isNaN(parseFloat(value))) {
                                          updateMieterhoehung(index, 'prozent', value === '' ? 0 : parseFloat(value) / 100);
                                        }
                                      }}
                                      placeholder="15"
                                      className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:ring-1 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                                    />
                                    <span className="text-[10px] text-gray-500">Erhöhung in %</span>
                                  </div>
                                  <button
                                    onClick={() => removeMieterhoehung(index)}
                                    className="p-1 text-red-600 hover:bg-red-50 rounded flex-shrink-0"
                                  >
                                    <X className="w-3.5 h-3.5" />
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
                        </div>
                      </div>

                      {/* ========== KATEGORIE 3: GEPLANTE HALTEDAUER & WERTSTEIGERUNG ========== */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                          Geplante Haltedauer & Wertsteigerung
                        </h3>
                        
                        <div className="space-y-2.5">
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
                        </div>
                      </div>

                      {/* Save Scenario */}
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
      </div>
    </>
  );
}
