'use client';

import { useState, useEffect } from 'react';

const BUNDESLAENDER = [
  { name: 'Bayern', rate: 3.5 },
  { name: 'Sachsen', rate: 5.5 },
  { name: 'Hamburg', rate: 5.5 },
  { name: 'Baden-Württemberg', rate: 5.0 },
  { name: 'Bremen', rate: 5.0 },
  { name: 'Niedersachsen', rate: 5.0 },
  { name: 'Rheinland-Pfalz', rate: 5.0 },
  { name: 'Sachsen-Anhalt', rate: 5.0 },
  { name: 'Thüringen', rate: 5.0 },
  { name: 'Berlin', rate: 6.0 },
  { name: 'Hessen', rate: 6.0 },
  { name: 'Mecklenburg-Vorpommern', rate: 6.0 },
  { name: 'Brandenburg', rate: 6.5 },
  { name: 'Nordrhein-Westfalen', rate: 6.5 },
  { name: 'Saarland', rate: 6.5 },
  { name: 'Schleswig-Holstein', rate: 6.5 },
].sort((a, b) => a.name.localeCompare(b.name));

export default function KaufnebenkostenrechnerSimple() {
  const [kaufpreis, setKaufpreis] = useState<string>('300000');
  const [bundesland, setBundesland] = useState<string>('Nordrhein-Westfalen');
  const [notarProzent, setNotarProzent] = useState<string>('1.5');
  const [grundbuchProzent, setGrundbuchProzent] = useState<string>('0.5');
  const [maklerProzent, setMaklerProzent] = useState<string>('3.57');
  const [mitMakler, setMitMakler] = useState<boolean>(true);

  const [grunderwerbsteuer, setGrunderwerbsteuer] = useState<number>(0);
  const [notarkosten, setNotarkosten] = useState<number>(0);
  const [grundbuchkosten, setGrundbuchkosten] = useState<number>(0);
  const [maklerkosten, setMaklerkosten] = useState<number>(0);
  const [gesamtNebenkosten, setGesamtNebenkosten] = useState<number>(0);
  const [gesamtProzent, setGesamtProzent] = useState<number>(0);

  useEffect(() => {
    const kp = parseFloat(kaufpreis) || 0;
    const bl = BUNDESLAENDER.find(b => b.name === bundesland);
    const grSteuersatz = bl ? bl.rate : 6.0;
    const notar = parseFloat(notarProzent) || 0;
    const grundbuch = parseFloat(grundbuchProzent) || 0;
    const makler = mitMakler ? (parseFloat(maklerProzent) || 0) : 0;

    const grSteuer = kp * (grSteuersatz / 100);
    const notarK = kp * (notar / 100);
    const grundbuchK = kp * (grundbuch / 100);
    const maklerK = kp * (makler / 100);
    const gesamt = grSteuer + notarK + grundbuchK + maklerK;
    const gesamtP = grSteuersatz + notar + grundbuch + makler;

    setGrunderwerbsteuer(grSteuer);
    setNotarkosten(notarK);
    setGrundbuchkosten(grundbuchK);
    setMaklerkosten(maklerK);
    setGesamtNebenkosten(gesamt);
    setGesamtProzent(gesamtP);
  }, [kaufpreis, bundesland, notarProzent, grundbuchProzent, maklerProzent, mitMakler]);

  const selectedBundesland = BUNDESLAENDER.find(b => b.name === bundesland);
  const grunderwerbsteuersatz = selectedBundesland ? selectedBundesland.rate : 6.0;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-[#7099A3] to-[#5d7e87] px-6 py-4">
        <h2 className="text-xl font-bold text-white">Kaufnebenkostenrechner</h2>
        <p className="text-white/80 text-sm">Alle Kosten beim Immobilienkauf berechnen</p>
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
                Bundesland
              </label>
              <select
                value={bundesland}
                onChange={(e) => setBundesland(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none text-lg bg-white"
              >
                {BUNDESLAENDER.map((bl) => (
                  <option key={bl.name} value={bl.name}>
                    {bl.name} ({bl.rate}%)
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notarkosten (%)
                </label>
                <input
                  type="number"
                  value={notarProzent}
                  onChange={(e) => setNotarProzent(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                  step="0.1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Grundbuch (%)
                </label>
                <input
                  type="number"
                  value={grundbuchProzent}
                  onChange={(e) => setGrundbuchProzent(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                  step="0.1"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Maklerkosten
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={mitMakler}
                    onChange={(e) => setMitMakler(e.target.checked)}
                    className="w-4 h-4 text-[#7099A3] rounded focus:ring-[#7099A3]"
                  />
                  <span className="text-sm text-gray-600">Mit Makler</span>
                </label>
              </div>
              {mitMakler && (
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={maklerProzent}
                    onChange={(e) => setMaklerProzent(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7099A3] focus:border-[#7099A3] outline-none"
                    step="0.01"
                  />
                  <span className="text-gray-500">%</span>
                </div>
              )}
              <p className="text-xs text-gray-500 mt-1">Käuferanteil (max. 50% der Gesamtprovision)</p>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">Grunderwerbsteuer</div>
                  <div className="text-xs text-gray-400">{grunderwerbsteuersatz}%</div>
                </div>
                <div className="text-xl font-bold text-gray-800">
                  {grunderwerbsteuer.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">Notarkosten</div>
                  <div className="text-xs text-gray-400">{notarProzent}%</div>
                </div>
                <div className="text-xl font-bold text-gray-800">
                  {notarkosten.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-gray-600">Grundbuchkosten</div>
                  <div className="text-xs text-gray-400">{grundbuchProzent}%</div>
                </div>
                <div className="text-xl font-bold text-gray-800">
                  {grundbuchkosten.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
                </div>
              </div>
            </div>

            {mitMakler && (
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-gray-600">Maklerkosten</div>
                    <div className="text-xs text-gray-400">{maklerProzent}%</div>
                  </div>
                  <div className="text-xl font-bold text-gray-800">
                    {maklerkosten.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
                  </div>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded-xl p-5 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-white/80 text-sm">Gesamte Kaufnebenkosten</div>
                  <div className="text-white/60 text-xs">{gesamtProzent.toFixed(2)}% vom Kaufpreis</div>
                </div>
                <div className="text-2xl font-bold">
                  {gesamtNebenkosten.toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <div className="flex justify-between items-center">
                <div className="text-sm text-blue-800">Gesamtinvestition</div>
                <div className="text-xl font-bold text-blue-800">
                  {((parseFloat(kaufpreis) || 0) + gesamtNebenkosten).toLocaleString('de-DE', { maximumFractionDigits: 0 })} €
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
