'use client';

import { useState } from 'react';
import { geocodeAddress, fetchAllPOIs, calculateMikrolageScore } from '@/lib/mikrolage';
import type { MikrolageResult, CategoryScore } from '@/lib/mikrolage';

interface Props {
  initialAddress: string;
}

const ASSESSMENT_COLORS: Record<string, string> = {
  'Sehr gut':     'text-green-700 bg-green-50 border-green-200',
  'Gut':          'text-blue-700 bg-blue-50 border-blue-200',
  'Ausbaufähig':  'text-yellow-700 bg-yellow-50 border-yellow-200',
  'Mangelhaft':   'text-red-700 bg-red-50 border-red-200',
  'Nachteil':     'text-red-700 bg-red-50 border-red-200',
};

const SCORE_BAR_COLORS = [
  '', 'bg-red-500', 'bg-red-400', 'bg-orange-400', 'bg-orange-300',
  'bg-yellow-400', 'bg-yellow-300', 'bg-lime-400', 'bg-green-400', 'bg-green-500', 'bg-emerald-500',
];

export default function MikrolageEmbed({ initialAddress }: Props) {
  const [loading, setLoading]   = useState(false);
  const [started, setStarted]   = useState(false);
  const [error, setError]       = useState<string | null>(null);
  const [result, setResult]     = useState<MikrolageResult | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  async function handleAnalyze() {
    setStarted(true);
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const geo = await geocodeAddress(initialAddress);
      if (!geo) {
        setError('Adresse nicht gefunden. Bitte überprüfe die Eingabe im Objekt-Tab.');
        return;
      }
      const pois = await fetchAllPOIs(geo.lat, geo.lng);
      setResult(calculateMikrolageScore(pois, geo.displayName, geo.lat, geo.lng));
    } catch {
      setError('Fehler bei der Analyse. Bitte versuche es erneut.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#7099A3] to-[#5d7e87] px-4 py-3 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-bold text-white">Mikrolage-Analyse</h2>
          <p className="text-white/75 text-xs truncate max-w-xs">{initialAddress}</p>
        </div>
        {result && (
          <div className="text-right">
            <div className="text-2xl font-bold text-white">{result.overallScore}<span className="text-sm font-normal">/10</span></div>
            <div className="text-white/80 text-xs">{result.overallAssessment}</div>
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Not yet started */}
        {!started && (
          <div className="text-center py-4">
            <p className="text-sm text-gray-600 mb-4">
              Analysiere Infrastruktur, ÖPNV, Nahversorgung und mehr für diese Adresse.
            </p>
            <button
              onClick={handleAnalyze}
              className="px-6 py-2.5 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm"
            >
              Standortanalyse starten →
            </button>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="text-center py-6">
            <div className="w-8 h-8 border-2 border-[#7099A3] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-gray-600">Analysiere Standort…</p>
            <p className="text-xs text-gray-400 mt-1">Rufe OpenStreetMap-Daten ab</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="py-4">
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>
            <button
              onClick={handleAnalyze}
              className="mt-3 text-sm text-[#7099A3] hover:underline"
            >
              Erneut versuchen
            </button>
          </div>
        )}

        {/* Results */}
        {result && !loading && (
          <>
            {/* Overall score bar */}
            <div className="mb-4">
              <div className="flex gap-1.5 mb-2">
                {Array.from({ length: 10 }, (_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-2 rounded-full ${
                      i < result.overallScore
                        ? SCORE_BAR_COLORS[result.overallScore] || 'bg-[#7099A3]'
                        : 'bg-gray-100'
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs text-gray-500">
                Gesamt-Score: <strong className="text-gray-800">{result.overallScore}/10</strong> · {result.totalPOIs} Einrichtungen gefunden
              </p>
            </div>

            {/* Category grid */}
            <div className="space-y-2">
              {result.details.map((cat: CategoryScore) => (
                <div key={cat.categoryKey} className="border border-gray-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpanded(expanded === cat.categoryKey ? null : cat.categoryKey)}
                    className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-gray-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base leading-none">{cat.icon}</span>
                      <span className="text-sm text-gray-800">{cat.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${ASSESSMENT_COLORS[cat.assessment] || 'text-gray-600 bg-gray-50 border-gray-200'}`}>
                        {cat.assessment}
                      </span>
                      <span className="text-xs text-gray-400">{cat.score}/{cat.maxScore}</span>
                      <svg
                        className={`w-3.5 h-3.5 text-gray-400 transition-transform ${expanded === cat.categoryKey ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {expanded === cat.categoryKey && cat.items.length > 0 && (
                    <div className="px-3 pb-3 bg-gray-50 border-t border-gray-100">
                      <ul className="mt-2 space-y-1">
                        {cat.items.slice(0, 5).map((item, i) => (
                          <li key={i} className="flex items-center justify-between text-xs text-gray-600">
                            <span className="truncate">{item.name || item.type}</span>
                            <span className="text-gray-400 ml-2 shrink-0">{Math.round(item.distance)} m</span>
                          </li>
                        ))}
                        {cat.items.length > 5 && (
                          <li className="text-xs text-gray-400">+ {cat.items.length - 5} weitere</li>
                        )}
                      </ul>
                    </div>
                  )}
                  {expanded === cat.categoryKey && cat.items.length === 0 && (
                    <p className="px-3 pb-3 pt-2 text-xs text-gray-400 bg-gray-50 border-t border-gray-100">
                      Keine Einrichtungen in der Nähe gefunden.
                    </p>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-3 text-xs text-gray-400">
              Datenquelle: OpenStreetMap · Analyse auf Basis eines 500–1.500 m Radius
            </p>
          </>
        )}
      </div>
    </div>
  );
}
