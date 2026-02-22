'use client';

import { useState, useEffect } from 'react';

export default function RenditerechnerSimple() {
  const [kaufpreis, setKaufpreis] = useState<string>('300000');
  const [monatlicheKaltmiete, setMonatlicheKaltmiete] = useState<string>('1000');
  const [nebenkostenProzent, setNebenkostenProzent] = useState<string>('10');
  const [nichtUmlegbareKosten, setNichtUmlegbareKosten] = useState<string>('150');
  
  const [bruttomietrendite, setBruttomietrendite] = useState<number | null>(null);
  const [nettomietrendite, setNettomietrendite] = useState<number | null>(null);
  const [mietmultiplikator, setMietmultiplikator] = useState<number | null>(null);

  useEffect(() => {
    const kp = parseFloat(kaufpreis) || 0;
    const miete = parseFloat(monatlicheKaltmiete) || 0;
    const nkProzent = parseFloat(nebenkostenProzent) || 0;
    const nichtUmlegbar = parseFloat(nichtUmlegbareKosten) || 0;

    if (kp > 0 && miete > 0) {
      const jahresmiete = miete * 12;
      const nebenkosten = kp * (nkProzent / 100);
      const gesamtkosten = kp + nebenkosten;
      const jahresNichtUmlegbar = nichtUmlegbar * 12;

      // Bruttomietrendite = Jahresmiete / Kaufpreis * 100
      const brutto = (jahresmiete / kp) * 100;
      setBruttomietrendite(brutto);

      // Nettomietrendite = (Jahresmiete - nicht umlegbare Kosten) / Gesamtkosten * 100
      const netto = ((jahresmiete - jahresNichtUmlegbar) / gesamtkosten) * 100;
      setNettomietrendite(netto);

      // Mietmultiplikator = Kaufpreis / Jahresmiete
      const multiplikator = kp / jahresmiete;
      setMietmultiplikator(multiplikator);
    } else {
      setBruttomietrendite(null);
      setNettomietrendite(null);
      setMietmultiplikator(null);
    }
  }, [kaufpreis, monatlicheKaltmiete, nebenkostenProzent, nichtUmlegbareKosten]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-[#7099A3] to-[#5d7e87] px-6 py-4">
        <h2 className="text-xl font-bold text-white">Renditerechner</h2>
        <p className="text-white/80 text-sm">Brutto- und Nettomietrendite berechnen</p>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kaufpreis (€)
              </label>
              <input
                type="number"
                value={kaufpreis}
                onChange={(e) => setKaufpreis(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none text-lg"
                placeholder="300000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Monatliche Kaltmiete (€)
              </label>
              <input
                type="number"
                value={monatlicheKaltmiete}
                onChange={(e) => setMonatlicheKaltmiete(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none text-lg"
                placeholder="1000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kaufnebenkosten (%)
              </label>
              <input
                type="number"
                value={nebenkostenProzent}
                onChange={(e) => setNebenkostenProzent(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none text-lg"
                placeholder="10"
                step="0.1"
              />
              <p className="text-xs text-gray-500 mt-1">Grunderwerbsteuer, Notar, Makler etc.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nicht umlegbare Kosten (€/Monat)
              </label>
              <input
                type="number"
                value={nichtUmlegbareKosten}
                onChange={(e) => setNichtUmlegbareKosten(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none text-lg"
                placeholder="150"
              />
              <p className="text-xs text-gray-500 mt-1">Verwaltung, Instandhaltung, Leerstand etc.</p>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-[#7099A3]/10 to-[#5d7e87]/10 rounded-xl p-5">
              <div className="text-sm text-gray-600 mb-1">Bruttomietrendite</div>
              <div className="text-3xl font-bold text-[#7099A3]">
                {bruttomietrendite !== null ? `${bruttomietrendite.toFixed(2)}%` : '—'}
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Jahresmiete ÷ Kaufpreis × 100
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-5 border border-green-100">
              <div className="text-sm text-gray-600 mb-1">Nettomietrendite</div>
              <div className="text-3xl font-bold text-green-600">
                {nettomietrendite !== null ? `${nettomietrendite.toFixed(2)}%` : '—'}
              </div>
              <div className="text-xs text-gray-500 mt-2">
                (Jahresmiete − Kosten) ÷ Gesamtinvestition × 100
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Mietmultiplikator</div>
              <div className="text-3xl font-bold text-gray-800">
                {mietmultiplikator !== null ? mietmultiplikator.toFixed(1) : '—'}
              </div>
              <div className="text-xs text-gray-500 mt-2">
                Kaufpreis ÷ Jahresmiete (auch: Vervielfältiger)
              </div>
            </div>

            {mietmultiplikator !== null && (
              <div className="text-sm text-gray-600 bg-white rounded-lg p-4 border border-gray-200">
                <strong>Einordnung:</strong>{' '}
                {mietmultiplikator < 20 ? (
                  <span className="text-green-600">Günstig (unter 20)</span>
                ) : mietmultiplikator < 25 ? (
                  <span className="text-yellow-600">Marktgerecht (20-25)</span>
                ) : (
                  <span className="text-red-600">Teuer (über 25)</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
