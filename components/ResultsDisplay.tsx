'use client';

import { useState } from 'react';
import { CalculationResult, MonthlyCalculation } from '@/lib/types';
import { aggregateToAnnual } from '@/lib/calculator';

interface ResultsDisplayProps {
  result: CalculationResult;
}

export default function ResultsDisplay({ result }: ResultsDisplayProps) {
  const [viewMode, setViewMode] = useState<'monthly' | 'annual'>('annual');
  const [showAllMonths, setShowAllMonths] = useState(false);

  const displayData: MonthlyCalculation[] =
    viewMode === 'annual' ? aggregateToAnnual(result.monthly) : result.monthly;

  const visibleData = showAllMonths ? displayData : displayData.slice(0, 12);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercent = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const isLastRow = (index: number) => 
    index === visibleData.length - 1 && showAllMonths && displayData.length === result.monthly.length;

  return (
    <div className="space-y-3 md:space-y-4 w-full overflow-hidden">
      {/* Summary Cards */}
      <div className="bg-white rounded-lg shadow border border-gray-200 p-3 md:p-4">
        <h2 className="text-base font-semibold mb-3 md:mb-4 text-gray-800">
          Zusammenfassung
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <div className="relative group">
            <div className="flex items-center gap-1.5 mb-1.5">
              <p className="text-xs text-gray-600 font-medium">Gesamtkosten</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-help">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <div className="absolute left-0 top-full mt-1 w-56 p-2.5 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                Kaufpreis + Nebenkosten (Grunderwerbsteuer, Notar, Makler)
              </div>
            </div>
            <p className="text-sm font-bold text-[#4B644A]">
              {formatCurrency(result.summary.gesamtkosten)}
            </p>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-1.5 mb-1.5">
              <p className="text-xs text-gray-600 font-medium">Eigenkapital</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-help">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <div className="absolute left-0 top-full mt-1 w-56 p-2.5 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                Ihr eingesetztes Eigenkapital (inkl. Nebenkosten)
              </div>
            </div>
            <p className="text-sm font-bold text-[#4B644A]">
              {formatCurrency(result.summary.eigenkapital)}
            </p>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-1.5 mb-1.5">
              <p className="text-xs text-gray-600 font-medium">Eigenkapitalrendite</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-help">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <div className="absolute left-0 top-full mt-1 w-56 p-2.5 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                IRR (Internal Rate of Return) - Ihre durchschnittliche jährliche Rendite auf das eingesetzte Eigenkapital
              </div>
            </div>
            <p className="text-sm font-bold text-[#4B644A]">
              {formatPercent(result.summary.irr)}
            </p>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-1.5 mb-1.5">
              <p className="text-xs text-gray-600 font-medium">Vermögenszuwachs</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-help">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <div className="absolute left-0 top-full mt-1 w-64 p-2.5 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <div className="font-semibold mb-1">Summe aller Cashflows (inkl. EK und Verkauf)</div>
                <div>Gesamtertrag Ihrer Investition nach {result.summary.finalPropertyValue ? Math.round(result.monthly.length / 12) : 0} Jahren</div>
              </div>
            </div>
            <p className="text-sm font-bold text-[#4B644A]">
              {formatCurrency(result.summary.vermoegensZuwachs)}
            </p>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-1.5 mb-1.5">
              <p className="text-xs text-gray-600 font-medium">1. Jahr Cashflow</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-help">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <div className="absolute left-0 top-full mt-1 w-56 p-2.5 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                Jährlicher Cashflow im ersten Jahr (Miete minus Kosten)
              </div>
            </div>
            <p
              className={`text-sm font-bold ${
                result.summary.erstjahrCashflowPA < 0 ? 'text-red-600' : 'text-[#6B8882]'
              }`}
            >
              {formatCurrency(result.summary.erstjahrCashflowPA)}
            </p>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-1.5 mb-1.5">
              <p className="text-xs text-gray-600 font-medium">Endwert Immobilie</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-help">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <div className="absolute left-0 top-full mt-1 w-56 p-2.5 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                Geschätzter Verkaufswert der Immobilie am Ende der Haltedauer
              </div>
            </div>
            <p className="text-sm font-bold text-[#4B644A]">
              {formatCurrency(result.summary.finalPropertyValue)}
            </p>
          </div>
          <div className="relative group">
            <div className="flex items-center gap-1.5 mb-1.5">
              <p className="text-xs text-gray-600 font-medium">Restschuld Ende</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 cursor-help">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <div className="absolute left-0 top-full mt-1 w-64 p-2.5 bg-gray-900 text-white text-xs rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                <div className="font-semibold mb-1">Restschuld am Ende der Haltedauer</div>
                <div>Verbliebene Darlehensschuld nach {result.summary.finalPropertyValue ? Math.round(result.monthly.length / 12) : 0} Jahren</div>
              </div>
            </div>
            <p className="text-sm font-bold text-[#4B644A]">
              {formatCurrency(result.summary.restschuldEnde)}
            </p>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-base font-semibold text-gray-800">
            Cashflow-Übersicht
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('monthly')}
              className={`px-3 py-1.5 text-xs rounded font-medium transition-colors ${
                viewMode === 'monthly'
                  ? 'bg-[#7099A3] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Monatlich
            </button>
            <button
              onClick={() => setViewMode('annual')}
              className={`px-3 py-1.5 text-xs rounded font-medium transition-colors ${
                viewMode === 'annual'
                  ? 'bg-[#7099A3] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Jährlich
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {viewMode === 'annual' ? 'Jahr' : 'Monat'}
                </th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Miete
                </th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Annuität
                </th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Zinsen
                </th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Tilgung
                </th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Cashflow
                </th>
                <th className="px-4 py-2 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Restschuld
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {visibleData.map((row, index) => {
                const isLast = isLastRow(index);
                const isInitial = row.period === 0;
                return (
                  <tr
                    key={row.period}
                    className={`hover:bg-gray-50 transition-colors ${
                      isLast ? 'bg-yellow-50 font-semibold' : ''
                    } ${isInitial ? 'bg-red-50 font-semibold' : ''}`}
                  >
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                      {isInitial 
                        ? 'Initial' 
                        : viewMode === 'annual' 
                          ? `Jahr ${row.period}` 
                          : `Monat ${row.period}`}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-right text-gray-900">
                      {isInitial && row.mieteinnahmen === 0 ? '-' : formatCurrency(row.mieteinnahmen)}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-right text-gray-700">
                      {isInitial && row.annuitaet === 0 ? '-' : formatCurrency(row.annuitaet)}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-right text-blue-600">
                      {isInitial && row.zinsen === 0 ? '-' : formatCurrency(row.zinsen)}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-right text-blue-600">
                      {isInitial && row.tilgung === 0 ? '-' : formatCurrency(row.tilgung)}
                    </td>
                    <td
                      className={`px-4 py-2 whitespace-nowrap text-sm text-right font-medium ${
                        row.cashflow < 0 ? 'text-red-600' : 'text-green-600'
                      }`}
                    >
                      {formatCurrency(row.cashflow)}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-right text-gray-900">
                      {isInitial && row.restschuld === 0 ? '-' : formatCurrency(row.restschuld)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-gray-50 border-t-2 border-gray-300">
              <tr className="font-semibold">
                <td className="px-4 py-2 text-sm text-gray-900">GESAMT</td>
                <td className="px-4 py-2 text-sm text-right text-gray-900">
                  {formatCurrency(
                    displayData.reduce((sum, row) => sum + row.mieteinnahmen, 0)
                  )}
                </td>
                <td className="px-4 py-2 text-sm text-right text-gray-700">
                  {formatCurrency(displayData.reduce((sum, row) => sum + row.annuitaet, 0))}
                </td>
                <td className="px-4 py-2 text-sm text-right text-blue-600">
                  {formatCurrency(displayData.reduce((sum, row) => sum + row.zinsen, 0))}
                </td>
                <td className="px-4 py-2 text-sm text-right text-blue-600">
                  {formatCurrency(displayData.reduce((sum, row) => sum + row.tilgung, 0))}
                </td>
                <td
                  className={`px-4 py-2 text-sm text-right ${
                    displayData.reduce((sum, row) => sum + row.cashflow, 0) < 0
                      ? 'text-red-600'
                      : 'text-green-600'
                  }`}
                >
                  {formatCurrency(displayData.reduce((sum, row) => sum + row.cashflow, 0))}
                </td>
                <td className="px-4 py-2 text-sm text-right text-gray-900">-</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {displayData.length > 12 && (
          <div className="p-4 text-center border-t border-gray-200 bg-gray-50">
            <button
              onClick={() => setShowAllMonths(!showAllMonths)}
              className="px-6 py-2 text-sm bg-white border border-gray-300 hover:bg-gray-50 rounded-lg text-gray-700 font-medium transition-colors"
            >
              {showAllMonths
                ? 'Weniger anzeigen'
                : `Alle ${displayData.length - 1} ${viewMode === 'annual' ? 'Jahre' : 'Monate'} anzeigen`}
            </button>
          </div>
        )}

        {showAllMonths && displayData.length === result.monthly.length && (
          <div className="p-4 space-y-2 bg-gray-50 border-t border-gray-200">
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Initial (Zeile 1):</strong> Initiale Investition - Eigenkapital + Nebenkosten (
                {formatCurrency(result.summary.eigenkapital)} negativer Cashflow zum Zeitpunkt 0)
              </p>
            </div>
            <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Letzte Zeile:</strong> Enthält den Verkaufserlös der Immobilie (
                {formatCurrency(result.summary.finalPropertyValue)} - Restschuld)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
