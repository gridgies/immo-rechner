'use client';

import { useState, useEffect } from 'react';
import { InvestmentInputs, Mieterhoehung } from '@/lib/types';
import { calculateInvestment } from '@/lib/calculator';
import ResultsDisplay from './ResultsDisplay';

export default function InvestmentForm() {
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

  // Auto-calculate nicht umlegbar when umlegbar changes
  const [autoCalculateNichtUmlegbar, setAutoCalculateNichtUmlegbar] = useState(true);

  useEffect(() => {
    if (autoCalculateNichtUmlegbar && wohngeldUmlegbar) {
      const umlegbar = parseFloat(wohngeldUmlegbar);
      if (!isNaN(umlegbar)) {
        setWohngeldNichtUmlegbar((umlegbar * 0.3).toFixed(2));
      }
    }
  }, [wohngeldUmlegbar, autoCalculateNichtUmlegbar]);

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
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">
        Immobilien Investment Rechner
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Parameter eingeben
          </h2>

          <div className="space-y-4">
            {/* Kaufpreis */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kaufpreis (€)
              </label>
              <input
                type="number"
                value={kaufpreis}
                onChange={(e) => setKaufpreis(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Wohnfläche */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Wohnfläche (m²)
              </label>
              <input
                type="number"
                step="0.01"
                value={wohnflaeche}
                onChange={(e) => setWohnflaeche(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Nebenkosten */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
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
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Eigenkapital */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Eigenkapital (%)
              </label>
              <input
                type="number"
                step="0.01"
                value={eigenkapitalProzent}
                onChange={(e) => setEigenkapitalProzent(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Zinssatz */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Zinssatz (% p.a.)
              </label>
              <input
                type="number"
                step="0.01"
                value={zinssatz}
                onChange={(e) => setZinssatz(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Tilgung */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tilgung (% p.a.)
              </label>
              <input
                type="number"
                step="0.01"
                value={tilgung}
                onChange={(e) => setTilgung(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Monatliche Kaltmiete */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monatliche Kaltmiete (€)
              </label>
              <input
                type="number"
                step="0.01"
                value={monatlicheKaltmiete}
                onChange={(e) => setMonatlicheKaltmiete(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Wohngeld umlegbar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Wohngeld umlegbar (€/Monat)
              </label>
              <input
                type="number"
                step="0.01"
                value={wohngeldUmlegbar}
                onChange={(e) => setWohngeldUmlegbar(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Wohngeld nicht umlegbar */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Wohngeld nicht umlegbar (€/Monat)
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
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Haltedauer
              </label>
              <select
                value={haltedauer}
                onChange={(e) => setHaltedauer(parseInt(e.target.value) as 10 | 20 | 30)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value={10}>10 Jahre</option>
                <option value={20}>20 Jahre</option>
                <option value={30}>30 Jahre</option>
              </select>
            </div>

            {/* Wertsteigerung */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Erwartete Wertsteigerung nach {haltedauer} Jahren (%)
                <span className="text-xs text-gray-500 ml-1">
                  (150% = 2.5x Wert)
                </span>
              </label>
              <input
                type="number"
                step="0.01"
                value={wertsteigerungProzent}
                onChange={(e) => setWertsteigerungProzent(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Mieterhöhungen */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-3">
                <label className="block text-sm font-medium text-gray-700">
                  Mieterhöhungen
                </label>
                <button
                  onClick={addMieterhoehung}
                  className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 flex items-center gap-1"
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
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
          </div>
        </div>

        {/* Results */}
        <div>
          {result && <ResultsDisplay result={result} />}
        </div>
      </div>
    </div>
  );
}
