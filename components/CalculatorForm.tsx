'use client';

import { useState } from 'react';
import { ScenarioInput, Mieterhoehung } from '@/types';

interface Props {
  onCalculate: (input: ScenarioInput) => void;
}

export default function CalculatorForm({ onCalculate }: Props) {
  const [formData, setFormData] = useState<ScenarioInput>({
    name: 'Meine Investition',
    kaufpreis: 355000,
    wohnflaeche: 69.24,
    nebenkosten_prozent: 11.57,
    eigenkapital_prozent: 20,
    zinssatz: 3.5,
    tilgung: 1,
    monatliche_kaltmiete: 861,
    wohngeld_umlegbar: 105,
    wohngeld_nicht_umlegbar: 45,
    haltedauer: 30,
    wertsteigerung_prozent: 150,
    mieterhoehungen: [
      { nach_monaten: 12, prozent: 15 }
    ],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  const addMieterhoehung = () => {
    setFormData({
      ...formData,
      mieterhoehungen: [
        ...formData.mieterhoehungen,
        { nach_monaten: 12, prozent: 0 }
      ]
    });
  };

  const removeMieterhoehung = (index: number) => {
    setFormData({
      ...formData,
      mieterhoehungen: formData.mieterhoehungen.filter((_, i) => i !== index)
    });
  };

  const updateMieterhoehung = (index: number, field: 'nach_monaten' | 'prozent', value: number) => {
    const updated = [...formData.mieterhoehungen];
    updated[index][field] = value;
    setFormData({ ...formData, mieterhoehungen: updated });
  };

  // Auto-calculate nicht umlegbar as 30% of umlegbar if not manually set
  const handleWohngeldUmlegbarChange = (value: number) => {
    setFormData({
      ...formData,
      wohngeld_umlegbar: value,
      // Only auto-calculate if nicht_umlegbar is at 30% of previous umlegbar
      wohngeld_nicht_umlegbar: Math.round(value * 0.3)
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Eingabeparameter</h2>

      {/* Scenario Name */}
      <div>
        <label className="block text-sm font-medium mb-2">Szenario Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Kaufpreis */}
      <div>
        <label className="block text-sm font-medium mb-2">Kaufpreis (€)</label>
        <input
          type="number"
          value={formData.kaufpreis}
          onChange={(e) => setFormData({ ...formData, kaufpreis: parseFloat(e.target.value) })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Wohnfläche */}
      <div>
        <label className="block text-sm font-medium mb-2">Wohnfläche (m²)</label>
        <input
          type="number"
          step="0.01"
          value={formData.wohnflaeche}
          onChange={(e) => setFormData({ ...formData, wohnflaeche: parseFloat(e.target.value) })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Nebenkosten */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Nebenkosten (%)
          <span className="text-gray-500 text-xs ml-2">Grunderwerbsteuer, Notar, Makler</span>
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.nebenkosten_prozent}
          onChange={(e) => setFormData({ ...formData, nebenkosten_prozent: parseFloat(e.target.value) })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Eigenkapital */}
      <div>
        <label className="block text-sm font-medium mb-2">Eigenkapital (%)</label>
        <input
          type="number"
          step="0.01"
          value={formData.eigenkapital_prozent}
          onChange={(e) => setFormData({ ...formData, eigenkapital_prozent: parseFloat(e.target.value) })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Zinssatz */}
      <div>
        <label className="block text-sm font-medium mb-2">Zinssatz (% p.a.)</label>
        <input
          type="number"
          step="0.01"
          value={formData.zinssatz}
          onChange={(e) => setFormData({ ...formData, zinssatz: parseFloat(e.target.value) })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Tilgung */}
      <div>
        <label className="block text-sm font-medium mb-2">Tilgung (% p.a.)</label>
        <input
          type="number"
          step="0.01"
          value={formData.tilgung}
          onChange={(e) => setFormData({ ...formData, tilgung: parseFloat(e.target.value) })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Monatliche Kaltmiete */}
      <div>
        <label className="block text-sm font-medium mb-2">Monatliche Kaltmiete (€)</label>
        <input
          type="number"
          step="0.01"
          value={formData.monatliche_kaltmiete}
          onChange={(e) => setFormData({ ...formData, monatliche_kaltmiete: parseFloat(e.target.value) })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Wohngeld umlegbar */}
      <div>
        <label className="block text-sm font-medium mb-2">Wohngeld umlegbar (€/Monat)</label>
        <input
          type="number"
          step="0.01"
          value={formData.wohngeld_umlegbar}
          onChange={(e) => handleWohngeldUmlegbarChange(parseFloat(e.target.value))}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Wohngeld nicht umlegbar */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Wohngeld nicht umlegbar (€/Monat)
          <span className="text-gray-500 text-xs ml-2">Standard: 30% von umlegbar</span>
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.wohngeld_nicht_umlegbar}
          onChange={(e) => setFormData({ ...formData, wohngeld_nicht_umlegbar: parseFloat(e.target.value) })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      {/* Mieterhöhungen */}
      <div>
        <label className="block text-sm font-medium mb-2">Mieterhöhungen</label>
        <div className="space-y-2">
          {formData.mieterhoehungen.map((increase, index) => (
            <div key={index} className="flex gap-2 items-center">
              <div className="flex-1">
                <input
                  type="number"
                  value={increase.nach_monaten}
                  onChange={(e) => updateMieterhoehung(index, 'nach_monaten', parseInt(e.target.value))}
                  placeholder="Nach Monaten"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="flex-1">
                <input
                  type="number"
                  step="0.01"
                  value={increase.prozent}
                  onChange={(e) => updateMieterhoehung(index, 'prozent', parseFloat(e.target.value))}
                  placeholder="Prozent"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <button
                type="button"
                onClick={() => removeMieterhoehung(index)}
                className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addMieterhoehung}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            + Mieterhöhung hinzufügen
          </button>
        </div>
      </div>

      {/* Haltedauer */}
      <div>
        <label className="block text-sm font-medium mb-2">Haltedauer (Jahre)</label>
        <select
          value={formData.haltedauer}
          onChange={(e) => setFormData({ ...formData, haltedauer: parseInt(e.target.value) as 10 | 20 | 30 })}
          className="w-full border border-gray-300 rounded px-3 py-2"
        >
          <option value={10}>10 Jahre</option>
          <option value={20}>20 Jahre</option>
          <option value={30}>30 Jahre</option>
        </select>
      </div>

      {/* Wertsteigerung */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Erwartete Wertsteigerung nach {formData.haltedauer} Jahren (%)
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.wertsteigerung_prozent}
          onChange={(e) => setFormData({ ...formData, wertsteigerung_prozent: parseFloat(e.target.value) })}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
      >
        Berechnen
      </button>
    </form>
  );
}
