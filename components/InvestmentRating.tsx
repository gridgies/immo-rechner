'use client';

import { CalculationResult } from '@/lib/types';

interface Props {
  result: CalculationResult;
}

interface ScoreItem {
  label: string;
  value: string;
  score: number;
  max: number;
  hint: string;
}

function scoreColor(pct: number): string {
  if (pct >= 85) return '#10b981';
  if (pct >= 70) return '#22c55e';
  if (pct >= 55) return '#84cc16';
  if (pct >= 40) return '#eab308';
  if (pct >= 25) return '#f97316';
  return '#ef4444';
}

function ratingLabel(total: number): { text: string; textColor: string; bg: string } {
  if (total >= 85) return { text: 'Ausgezeichnet', textColor: 'text-emerald-700', bg: 'bg-emerald-50 border-emerald-200' };
  if (total >= 70) return { text: 'Stark',          textColor: 'text-green-700',   bg: 'bg-green-50 border-green-200' };
  if (total >= 55) return { text: 'Solide',          textColor: 'text-lime-700',    bg: 'bg-lime-50 border-lime-200' };
  if (total >= 40) return { text: 'Akzeptabel',      textColor: 'text-yellow-700',  bg: 'bg-yellow-50 border-yellow-200' };
  if (total >= 25) return { text: 'Schwach',          textColor: 'text-orange-700',  bg: 'bg-orange-50 border-orange-200' };
  return             { text: 'Kritisch',          textColor: 'text-red-700',     bg: 'bg-red-50 border-red-200' };
}

function fmtCur(v: number) {
  const sign = v >= 0 ? '+' : '';
  return sign + new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(v) + ' €';
}

export default function InvestmentRating({ result }: Props) {
  const irrPct   = result.summary.irr * 100;
  const cfMonthly = result.summary.erstjahrCashflowPM;
  const kaufpreis = result.inputs.kaufpreis;
  const brutto    = kaufpreis > 0
    ? (result.inputs.monatlicheKaltmiete * 12 / kaufpreis) * 100
    : 0;
  const ekQuote   = result.summary.gesamtkosten > 0
    ? (result.summary.eigenkapital / result.summary.gesamtkosten) * 100
    : 0;

  // — Scoring —
  // IRR  (max 35 pts)
  const irrScore =
    irrPct >= 12 ? 35 :
    irrPct >=  8 ? 28 :
    irrPct >=  5 ? 20 :
    irrPct >=  3 ? 12 :
    irrPct >=  0 ?  5 : 0;

  // Cashflow year 1 monthly (max 30 pts)
  const cfScore =
    cfMonthly >=  300 ? 30 :
    cfMonthly >=  100 ? 24 :
    cfMonthly >=    0 ? 16 :
    cfMonthly >= -200 ?  8 :
    cfMonthly >= -400 ?  3 : 0;

  // Bruttomietrendite (max 20 pts)
  const renditeScore =
    brutto >= 6.0 ? 20 :
    brutto >= 4.5 ? 16 :
    brutto >= 3.5 ? 11 :
    brutto >= 2.5 ?  6 : 0;

  // EK-Quote / conservatism (max 15 pts)
  const ekScore =
    ekQuote >= 35 ? 15 :
    ekQuote >= 25 ? 13 :
    ekQuote >= 15 ? 10 :
    ekQuote >= 10 ?  6 : 3;

  const total = irrScore + cfScore + renditeScore + ekScore;
  const mainColor = scoreColor(total);
  const { text: ratingText, textColor, bg } = ratingLabel(total);

  const items: ScoreItem[] = [
    {
      label: 'IRR / Eigenkapitalrendite',
      value: `${irrPct.toFixed(1)} %`,
      score: irrScore,
      max: 35,
      hint: irrPct >= 8 ? 'Sehr gut (≥ 8 %)' : irrPct >= 5 ? 'Gut (≥ 5 %)' : irrPct >= 3 ? 'Ausreichend (≥ 3 %)' : 'Unter Zielwert',
    },
    {
      label: 'Cashflow (1. Jahr, monatl.)',
      value: fmtCur(cfMonthly),
      score: cfScore,
      max: 30,
      hint: cfMonthly >= 100 ? 'Positiver Cashflow' : cfMonthly >= 0 ? 'Ausgeglichen' : 'Negativer Cashflow',
    },
    {
      label: 'Bruttomietrendite',
      value: `${brutto.toFixed(1)} %`,
      score: renditeScore,
      max: 20,
      hint: brutto >= 4.5 ? 'Gut (≥ 4,5 %)' : brutto >= 3.5 ? 'Mittel (3,5–4,5 %)' : 'Niedrig (< 3,5 %)',
    },
    {
      label: 'Eigenkapitalquote',
      value: `${ekQuote.toFixed(0)} %`,
      score: ekScore,
      max: 15,
      hint: ekQuote >= 25 ? 'Konservativ & sicher' : ekQuote >= 15 ? 'Solide Basis' : 'Hoher Hebel',
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-semibold text-gray-800">Deal-Score</h2>
        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${bg} ${textColor}`}>
          {ratingText}
        </span>
      </div>

      {/* Big score + bar */}
      <div className="mb-5">
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-bold tabular-nums" style={{ color: mainColor }}>
            {total}
          </span>
          <span className="text-sm text-gray-400">/ 100 Punkte</span>
        </div>
        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${total}%`, backgroundColor: mainColor }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1 select-none">
          <span>Kritisch</span>
          <span>Schwach</span>
          <span>Solide</span>
          <span>Stark</span>
          <span>Ausgezeichnet</span>
        </div>
      </div>

      {/* Sub-score rows */}
      <div className="space-y-3 mb-4">
        {items.map((item) => {
          const pct = (item.score / item.max) * 100;
          const c = scoreColor(pct);
          return (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-1 gap-2">
                <span className="text-xs text-gray-700 truncate flex-1">{item.label}</span>
                <span className="text-xs text-gray-500 shrink-0">{item.hint}</span>
                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <span className="text-xs font-semibold text-gray-800">{item.value}</span>
                  <span className="text-xs text-gray-400">({item.score}/{item.max})</span>
                </div>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, backgroundColor: c }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Disclaimer */}
      <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-xs text-amber-800 leading-relaxed">
          <strong>⚠ Kein Anlageberatung:</strong> Der Deal-Score ist eine automatisierte Orientierungshilfe
          auf Basis deiner Eingaben – keine Finanzberatung und kein Kaufempfehlung. Jeder Investor
          trägt die volle Verantwortung für seine Entscheidungen. Ziehe bei Bedarf unabhängige
          Fachberatung hinzu.
        </p>
      </div>
    </div>
  );
}
