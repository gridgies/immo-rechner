'use client';

import { useState, useRef, useEffect } from 'react';
import { geocodeAddress, fetchAllPOIs, calculateMikrolageScore, generateAnalysisText } from '@/lib/mikrolage';
import type { MikrolageResult, CategoryScore } from '@/lib/mikrolage';

// Color mappings for assessments
const ASSESSMENT_COLORS: Record<string, string> = {
  'Sehr gut': 'text-green-700 bg-green-50 border-green-200',
  'Gut': 'text-blue-700 bg-blue-50 border-blue-200',
  'Ausbaufähig': 'text-yellow-700 bg-yellow-50 border-yellow-200',
  'Mangelhaft': 'text-red-700 bg-red-50 border-red-200',
  'Nachteil': 'text-red-700 bg-red-50 border-red-200',
};

const SCORE_COLORS = [
  '', 'bg-red-500', 'bg-red-400', 'bg-orange-400', 'bg-orange-300',
  'bg-yellow-400', 'bg-yellow-300', 'bg-lime-400', 'bg-green-400', 'bg-green-500', 'bg-emerald-500',
];

export default function MikrolageClient() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<MikrolageResult | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  const handleAnalyze = async () => {
    if (!address.trim()) {
      setError('Bitte gib eine Adresse ein');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Step 1: Geocode
      const geo = await geocodeAddress(address);
      if (!geo) {
        setError('Adresse konnte nicht gefunden werden. Bitte überprüfe die Eingabe.');
        return;
      }

      // Step 2: Fetch POIs
      const pois = await fetchAllPOIs(geo.lat, geo.lng);

      // Step 3: Calculate score
      const mikrolageResult = calculateMikrolageScore(pois, geo.displayName, geo.lat, geo.lng);
      setResult(mikrolageResult);
    } catch (err) {
      setError('Fehler bei der Analyse. Bitte versuche es erneut.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Initialize Leaflet map when result is available
  useEffect(() => {
    if (!result || !mapRef.current) return;

    // Dynamically load Leaflet CSS and JS
    const loadLeaflet = async () => {
      if (typeof window === 'undefined') return;

      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Load JS
      if (!(window as any).L) {
        await new Promise<void>((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
          script.onload = () => resolve();
          document.head.appendChild(script);
        });
      }

      const L = (window as any).L;
      if (!L) return;

      // Clear previous map
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
      }

      // Create map
      const map = L.map(mapRef.current).setView([result.lat, result.lng], 15);
      mapInstanceRef.current = map;

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      // Main marker
      L.marker([result.lat, result.lng])
        .addTo(map)
        .bindPopup(`<strong>Standort</strong><br/>${result.address.split(',')[0]}`)
        .openPopup();

      // POI markers with category colors
      const categoryColors: Record<string, string> = {
        oepnv: '#3B82F6',
        supermarkt: '#F59E0B',
        bildung: '#8B5CF6',
        gesundheit: '#EF4444',
        gastronomie: '#F97316',
        gruen: '#22C55E',
        bahn: '#6366F1',
        laerm: '#DC2626',
      };

      result.details.forEach((cat) => {
        const color = categoryColors[cat.categoryKey] || '#6B7280';
        cat.items.slice(0, 5).forEach((item) => {
          const icon = L.divIcon({
            className: 'custom-marker',
            html: `<div style="background:${color};width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></div>`,
            iconSize: [12, 12],
            iconAnchor: [6, 6],
          });
          L.marker([item.lat, item.lng], { icon })
            .addTo(map)
            .bindPopup(`<strong>${item.name}</strong><br/>${cat.category}<br/>${item.distance}m entfernt`);
        });
      });
    };

    loadLeaflet();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [result]);

  return (
    <div>
      {/* Search Form */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-8">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
          Adresse der Immobilie
        </label>
        <div className="flex gap-3">
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            className="flex-1 px-4 py-3 text-base border-2 border-gray-200 rounded-lg focus:border-[#7099A3] focus:ring-0 outline-none transition-colors"
            placeholder="z.B. Friedrichstraße 100, 10117 Berlin"
          />
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="px-6 py-3 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2 whitespace-nowrap"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Analysiere...
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                Analysieren
              </>
            )}
          </button>
        </div>
        {error && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
            {error}
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="bg-white rounded-xl shadow border border-gray-200 p-12 text-center">
          <div className="w-12 h-12 border-4 border-[#7099A3] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Mikrolage wird analysiert...</p>
          <p className="text-gray-400 text-sm mt-1">Standortdaten werden von OpenStreetMap geladen</p>
        </div>
      )}

      {/* Results */}
      {result && !loading && (
        <div className="space-y-6">
          {/* Score Overview */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Mikrolage-Bewertung</h2>
                <p className="text-gray-500 text-sm mt-1">{result.address.split(',').slice(0, 2).join(',')}</p>
              </div>
              <div className="text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold ${SCORE_COLORS[result.overallScore]}`}>
                  {result.overallScore}
                </div>
                <div className="text-xs text-gray-500 mt-1">von 10</div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="font-semibold text-gray-900 mb-1">{result.overallAssessment}</div>
              <p className="text-gray-600 text-sm">{generateAnalysisText(result)}</p>
            </div>
          </div>

          {/* Map + Details Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Map */}
            <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Standort & Umgebung</h3>
              </div>
              <div ref={mapRef} className="h-[400px] w-full" />
              <div className="p-3 bg-gray-50 text-xs text-gray-500">
                © OpenStreetMap contributors
              </div>
            </div>

            {/* Category Details */}
            <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">Detailbewertung</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {result.details.map((cat) => (
                  <div key={cat.categoryKey}>
                    <button
                      onClick={() => setExpandedCategory(expandedCategory === cat.categoryKey ? null : cat.categoryKey)}
                      className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{cat.icon}</span>
                        <div className="text-left">
                          <div className="font-medium text-gray-900 text-sm">{cat.category}</div>
                          <div className="text-xs text-gray-500">
                            {cat.count} gefunden im Radius von {cat.radius}m
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full border ${ASSESSMENT_COLORS[cat.assessment]}`}>
                          {cat.assessment}
                        </span>
                        <svg className={`w-4 h-4 text-gray-400 transition-transform ${expandedCategory === cat.categoryKey ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </button>
                    {expandedCategory === cat.categoryKey && cat.items.length > 0 && (
                      <div className="px-4 pb-4">
                        <div className="space-y-2 ml-9">
                          {cat.items.slice(0, 5).map((item, i) => (
                            <div key={i} className="flex items-center justify-between text-sm">
                              <span className="text-gray-700 truncate max-w-[200px]">{item.name}</span>
                              <span className="text-gray-500 text-xs ml-2">{item.distance}m</span>
                            </div>
                          ))}
                          {cat.items.length > 5 && (
                            <div className="text-xs text-gray-400">
                              +{cat.items.length - 5} weitere
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Score Breakdown Bar Chart */}
          <div className="bg-white rounded-xl shadow border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Score-Übersicht</h3>
            <div className="space-y-3">
              {result.details.filter(d => d.maxScore > 0).map((cat) => {
                const percentage = cat.maxScore > 0 ? Math.max(0, (cat.score / cat.maxScore) * 100) : 0;
                return (
                  <div key={cat.categoryKey} className="flex items-center gap-3">
                    <span className="text-sm w-48 text-gray-700 flex-shrink-0">{cat.icon} {cat.category}</span>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#7099A3] rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-12 text-right">{cat.score}/{cat.maxScore}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
