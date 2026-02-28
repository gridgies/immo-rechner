'use client';

import { useEffect, useState } from 'react';
import { CalculationResult } from '@/lib/types';
import { aggregateToAnnual } from '@/lib/calculator';

function fmtEur(v: number) {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(v);
}
function fmtPct(v: number) {
  return new Intl.NumberFormat('de-DE', { style: 'percent', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(v);
}
function scoreColor(pct: number) {
  if (pct >= 85) return '#10b981';
  if (pct >= 70) return '#22c55e';
  if (pct >= 55) return '#84cc16';
  if (pct >= 40) return '#eab308';
  if (pct >= 25) return '#f97316';
  return '#ef4444';
}
function ratingText(s: number) {
  if (s >= 85) return 'Ausgezeichnet';
  if (s >= 70) return 'Stark';
  if (s >= 55) return 'Solide';
  if (s >= 40) return 'Akzeptabel';
  if (s >= 25) return 'Schwach';
  return 'Kritisch';
}

interface PdfData {
  result: CalculationResult;
  address?: string;
}

function computeScore(result: CalculationResult) {
  const irrPct   = result.summary.irr * 100;
  const cfMonthly = result.summary.erstjahrCashflowPM;
  const kaufpreis = result.inputs.kaufpreis;
  const brutto    = kaufpreis > 0 ? (result.inputs.monatlicheKaltmiete * 12 / kaufpreis) * 100 : 0;
  const ekQuote   = result.summary.gesamtkosten > 0 ? (result.summary.eigenkapital / result.summary.gesamtkosten) * 100 : 0;

  const irrScore     = irrPct >= 12 ? 35 : irrPct >= 8 ? 28 : irrPct >= 5 ? 20 : irrPct >= 3 ? 12 : irrPct >= 0 ? 5 : 0;
  const cfScore      = cfMonthly >= 300 ? 30 : cfMonthly >= 100 ? 24 : cfMonthly >= 0 ? 16 : cfMonthly >= -200 ? 8 : cfMonthly >= -400 ? 3 : 0;
  const renditeScore = brutto >= 6.0 ? 20 : brutto >= 4.5 ? 16 : brutto >= 3.5 ? 11 : brutto >= 2.5 ? 6 : 0;
  const ekScore      = ekQuote >= 35 ? 15 : ekQuote >= 25 ? 13 : ekQuote >= 15 ? 10 : ekQuote >= 10 ? 6 : 3;

  return { total: irrScore + cfScore + renditeScore + ekScore, irrPct, cfMonthly, brutto, ekQuote };
}

export default function PdfPage() {
  const [data, setData] = useState<PdfData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('immo_pdf_data');
      if (!raw) { setError(true); return; }
      setData(JSON.parse(raw));
    } catch {
      setError(true);
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <p className="text-gray-600 mb-4">Keine Analysedaten gefunden.</p>
          <p className="text-sm text-gray-400">Bitte öffne diese Seite über den „PDF exportieren"-Button im Cashflow-Rechner.</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-2 border-[#7099A3] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const { result, address } = data;
  const annual  = aggregateToAnnual(result.monthly).filter(r => r.period > 0);
  const { total: score, irrPct, cfMonthly, brutto, ekQuote } = computeScore(result);
  const sColor  = scoreColor(score);
  const years   = Math.round(result.monthly.length / 12);
  const today   = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });

  return (
    <>
      {/* Print / Save button — hidden when printing */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-3">
        <button
          onClick={() => window.print()}
          className="px-5 py-2.5 bg-[#7099A3] text-white rounded-lg hover:bg-[#5d7e87] transition-colors font-medium text-sm flex items-center gap-2 shadow-lg"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Als PDF speichern
        </button>
        <button
          onClick={() => window.close()}
          className="px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
        >
          Schließen
        </button>
      </div>

      <div className="bg-white min-h-screen p-8 max-w-4xl mx-auto print:p-0 print:max-w-none">

        {/* ── HEADER ── */}
        <header className="flex items-center justify-between mb-8 pb-4 border-b-2 border-[#7099A3]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-[#7099A3] to-[#5d7e87] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">IR</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg leading-tight">Immobilien Rechner</div>
              <div className="text-xs text-gray-500">immo-rechner.net</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold text-gray-800">Investitionsanalyse</div>
            <div className="text-xs text-gray-500">{today}</div>
          </div>
        </header>

        {/* ── TITLE / OBJECT ── */}
        <section className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            {address || 'Immobilienanalyse'}
          </h1>
          <p className="text-sm text-gray-500">Haltedauer: {years} Jahre · Berechnet am {today}</p>
        </section>

        {/* ── KEY FIGURES ── */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Kaufpreis',       value: fmtEur(result.inputs.kaufpreis) },
            { label: 'Eigenkapital',    value: fmtEur(result.summary.eigenkapital) },
            { label: 'Finanzierung',    value: fmtEur(result.summary.finanzierung) },
            { label: 'Gesamtkosten',    value: fmtEur(result.summary.gesamtkosten) },
            { label: 'IRR',             value: fmtPct(result.summary.irr) },
            { label: 'Cashflow/Monat', value: fmtEur(result.summary.erstjahrCashflowPM) },
            { label: 'Vermögenszuwachs',value: fmtEur(result.summary.vermoegensZuwachs) },
            { label: 'Endwert Immob.', value: fmtEur(result.summary.finalPropertyValue) },
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="text-xs text-gray-500 mb-1">{label}</div>
              <div className="text-sm font-bold text-gray-900">{value}</div>
            </div>
          ))}
        </section>

        {/* ── DEAL SCORE ── */}
        <section className="mb-6 p-4 border border-gray-200 rounded-xl">
          <h2 className="text-base font-bold text-gray-800 mb-3">Deal-Score</h2>
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold" style={{ color: sColor }}>{score}</span>
            <span className="text-sm text-gray-400">/ 100 Punkte</span>
            <span className="ml-2 text-sm font-semibold" style={{ color: sColor }}>{ratingText(score)}</span>
          </div>
          {/* Score bar */}
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
            <div className="h-full rounded-full" style={{ width: `${score}%`, backgroundColor: sColor }} />
          </div>
          {/* Sub-scores */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'IRR / Eigenkapitalrendite', value: `${irrPct.toFixed(1)} %` },
              { label: 'Cashflow (1. Jahr, monatl.)', value: fmtEur(cfMonthly) },
              { label: 'Bruttomietrendite', value: `${brutto.toFixed(1)} %` },
              { label: 'Eigenkapitalquote', value: `${ekQuote.toFixed(0)} %` },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center justify-between text-xs">
                <span className="text-gray-600">{label}</span>
                <span className="font-semibold text-gray-900">{value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── CASHFLOW TABLE ── */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-800 mb-3">Cashflow-Übersicht (jährlich)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  {['Jahr', 'Mieteinnahmen', 'Annuität', 'Zinsen', 'Tilgung', 'Cashflow', 'Restschuld'].map(h => (
                    <th key={h} className="px-3 py-2 text-left font-semibold text-gray-700 border border-gray-200">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {annual.map((row, i) => (
                  <tr key={row.period} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-3 py-1.5 border border-gray-200 text-gray-900">Jahr {row.period}</td>
                    <td className="px-3 py-1.5 border border-gray-200 text-right text-gray-900">{fmtEur(row.mieteinnahmen)}</td>
                    <td className="px-3 py-1.5 border border-gray-200 text-right text-gray-700">{fmtEur(row.annuitaet)}</td>
                    <td className="px-3 py-1.5 border border-gray-200 text-right text-blue-700">{fmtEur(row.zinsen)}</td>
                    <td className="px-3 py-1.5 border border-gray-200 text-right text-blue-700">{fmtEur(row.tilgung)}</td>
                    <td className={`px-3 py-1.5 border border-gray-200 text-right font-medium ${row.cashflow < 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {fmtEur(row.cashflow)}
                    </td>
                    <td className="px-3 py-1.5 border border-gray-200 text-right text-gray-900">{fmtEur(row.restschuld)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-100 font-semibold">
                  <td className="px-3 py-2 border border-gray-200">Gesamt</td>
                  <td className="px-3 py-2 border border-gray-200 text-right">{fmtEur(annual.reduce((s, r) => s + r.mieteinnahmen, 0))}</td>
                  <td className="px-3 py-2 border border-gray-200 text-right">{fmtEur(annual.reduce((s, r) => s + r.annuitaet, 0))}</td>
                  <td className="px-3 py-2 border border-gray-200 text-right text-blue-700">{fmtEur(annual.reduce((s, r) => s + r.zinsen, 0))}</td>
                  <td className="px-3 py-2 border border-gray-200 text-right text-blue-700">{fmtEur(annual.reduce((s, r) => s + r.tilgung, 0))}</td>
                  <td className={`px-3 py-2 border border-gray-200 text-right ${annual.reduce((s, r) => s + r.cashflow, 0) < 0 ? 'text-red-600' : 'text-green-600'}`}>
                    {fmtEur(annual.reduce((s, r) => s + r.cashflow, 0))}
                  </td>
                  <td className="px-3 py-2 border border-gray-200 text-right">—</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* ── DISCLAIMER ── */}
        <section className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 leading-relaxed">
          <strong>Haftungsausschluss:</strong> Diese Analyse wurde mit immo-rechner.net erstellt und stellt keine Finanzberatung dar.
          Alle Berechnungen basieren auf den eingegebenen Annahmen und Prognosen, die nicht garantiert sind.
          Investitionen in Immobilien sind mit Risiken verbunden. Jeder Anleger trägt die volle Verantwortung für seine Entscheidungen.
          Bitte ziehe bei Bedarf unabhängige Finanz- und Rechtsberatung hinzu.
        </section>

        {/* ── FOOTER ── */}
        <footer className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-400">
          <span>immo-rechner.net – Kostenloser Immobilien-Rechner für Deutschland</span>
          <span>Erstellt am {today}</span>
        </footer>

      </div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          @page { size: A4; margin: 12mm 15mm; }
          body  { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </>
  );
}
