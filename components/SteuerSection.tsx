'use client';

import { useState, useMemo } from 'react';
import { calculateSteuer, STEUERSAETZE, GRUNDSTUECKSANTEILE } from '@/lib/steuer';
import type { SteuerResult } from '@/lib/steuer';

interface SteuerSectionProps {
  kaufpreis: number;
  monatlicheKaltmiete: number;
  wohngeldNichtUmlegbar: number;
  zinssatz: number; // decimal, e.g. 0.035
  tilgung: number;
  eigenkapitalAbsolut: number;
  nebenkostenProzent: number;
  haltedauer: number;
  mietSteigerung: number;
  hausgeldSteigerung: number;
}

export default function SteuerSection(props: SteuerSectionProps) {
  const [steuersatz, setSteuersatz] = useState(0.42);
  const [grundstuecksanteil, setGrundstuecksanteil] = useState(0.20);
  const [baujahr, setBaujahr] = useState(1990);
  const [showDetails, setShowDetails] = useState(false);

  const result: SteuerResult | null = useMemo(() => {
    if (!props.kaufpreis || !props.monatlicheKaltmiete) return null;

    const gesamtkosten = props.kaufpreis * (1 + props.nebenkostenProzent);
    const finanzierung = gesamtkosten - props.eigenkapitalAbsolut;
    const zinsenJahr1 = finanzierung * props.zinssatz;

    return calculateSteuer({
      kaufpreis: props.kaufpreis,
      grundstuecksanteil,
      baujahr,
      monatlicheKaltmiete: props.monatlicheKaltmiete,
      wohngeldNichtUmlegbar: props.wohngeldNichtUmlegbar,
      zinsenJaehrlich: zinsenJahr1,
      persoenlicheSteuersatz: steuersatz,
      haltedauer: props.haltedauer,
      mietSteigerung: props.mietSteigerung,
      hausgeldSteigerung: props.hausgeldSteigerung,
    });
  }, [props, steuersatz, grundstuecksanteil, baujahr]);

  const fmt = (v: number) => new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(v);
  const fmtPct = (v: number) => `${(v * 100).toFixed(1)}%`;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-800 pb-2 border-b border-gray-200">
        Steuer & AfA
      </h3>

      {/* Inputs */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-gray-600 mb-1">Persönlicher Steuersatz</label>
          <select
            value={steuersatz}
            onChange={(e) => setSteuersatz(parseFloat(e.target.value))}
            className="w-full px-2 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#7099A3] outline-none bg-white"
          >
            {STEUERSAETZE.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-gray-600 mb-1">Baujahr</label>
          <input
            type="number"
            value={baujahr}
            onChange={(e) => setBaujahr(parseInt(e.target.value) || 1990)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#7099A3] outline-none"
            placeholder="z.B. 1990"
            min={1800}
            max={2026}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs text-gray-600 mb-1">Grundstücksanteil (nicht abschreibbar)</label>
        <select
          value={grundstuecksanteil}
          onChange={(e) => setGrundstuecksanteil(parseFloat(e.target.value))}
          className="w-full px-2 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#7099A3] outline-none bg-white"
        >
          {GRUNDSTUECKSANTEILE.map((g) => (
            <option key={g.value} value={g.value}>{g.label}</option>
          ))}
          <option value={0.10}>Gering (~10%)</option>
          <option value={0.25}>Mittel (~25%)</option>
          <option value={0.40}>Hoch (~40%)</option>
        </select>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-3 pt-2">
          {/* AfA Info */}
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-xs text-blue-700 font-medium mb-1">Absetzung für Abnutzung (AfA)</div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">AfA-Satz:</span>
              <span className="font-semibold">{fmtPct(result.afaSatz)} p.a.</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">AfA-Basis (Gebäudewert):</span>
              <span className="font-semibold">{fmt(result.afaBasis)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Jährliche AfA:</span>
              <span className="font-semibold text-green-700">{fmt(result.afaJaehrlich)}</span>
            </div>
          </div>

          {/* Tax effect Year 1 */}
          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
            <div className="text-xs text-green-700 font-medium mb-1">Steuereffekt 1. Jahr</div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Zu versteuerndes Einkommen:</span>
              <span className={`font-semibold ${result.zuVersteuerndesEinkommenJahr1 < 0 ? 'text-green-700' : 'text-red-600'}`}>
                {fmt(result.zuVersteuerndesEinkommenJahr1)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Steuerersparnis Jahr 1:</span>
              <span className="font-semibold text-green-700">{fmt(result.steuerersparnisJahr1)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-700">Steuerersparnis gesamt:</span>
              <span className="font-semibold text-green-700">{fmt(result.steuerersparnisGesamt)}</span>
            </div>
          </div>

          {/* Detailed table */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full text-xs text-[#7099A3] hover:text-[#5d7e87] font-medium py-2 flex items-center justify-center gap-1"
          >
            {showDetails ? 'Details ausblenden' : 'Steuer-Jahresübersicht anzeigen'}
            <svg className={`w-3 h-3 transition-transform ${showDetails ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>

          {showDetails && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-2 py-1.5 text-left text-gray-600">Jahr</th>
                    <th className="px-2 py-1.5 text-right text-gray-600">Mieteinnahmen</th>
                    <th className="px-2 py-1.5 text-right text-gray-600">Werbungskosten</th>
                    <th className="px-2 py-1.5 text-right text-gray-600">Zu versteuern</th>
                    <th className="px-2 py-1.5 text-right text-gray-600">Steuereffekt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {result.jahresDetails.slice(0, showDetails ? undefined : 5).map((j) => (
                    <tr key={j.jahr} className="hover:bg-gray-50">
                      <td className="px-2 py-1.5 text-gray-900">Jahr {j.jahr}</td>
                      <td className="px-2 py-1.5 text-right text-gray-900">{fmt(j.mieteinnahmenJahr)}</td>
                      <td className="px-2 py-1.5 text-right text-gray-600">{fmt(j.werbungskosten)}</td>
                      <td className={`px-2 py-1.5 text-right ${j.zuVersteuerndesEinkommen < 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {fmt(j.zuVersteuerndesEinkommen)}
                      </td>
                      <td className={`px-2 py-1.5 text-right font-medium ${j.steuereffekt > 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {fmt(j.steuereffekt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="text-xs text-gray-400 mt-2">
            Hinweis: Die Steuerberechnung ist vereinfacht und ersetzt keine professionelle Steuerberatung. 
            Faktoren wie Sonderabschreibungen, Sanierungskosten oder Spekulationssteuer werden nicht berücksichtigt.
          </p>
        </div>
      )}

      {!result && (
        <div className="p-4 text-center text-gray-400 text-sm">
          Bitte fülle zuerst Kaufpreis und Miete aus, um die Steuerberechnung zu sehen.
        </div>
      )}
    </div>
  );
}
