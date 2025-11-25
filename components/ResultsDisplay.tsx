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
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Zusammenfassung
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Gesamtkosten</p>
            <p className="text-xl font-semibold text-blue-900">
              {formatCurrency(result.summary.gesamtkosten)}
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Eigenkapital</p>
            <p className="text-xl font-semibold text-blue-900">
              {formatCurrency(result.summary.eigenkapital)}
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">IRR</p>
            <p className="text-xl font-semibold text-green-700">
              {formatPercent(result.summary.irr)}
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Vermögenszuwachs</p>
            <p className="text-xl font-semibold text-purple-700">
              {formatCurrency(result.summary.vermoegensZuwachs)}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">1. Jahr Cashflow (p.a.)</p>
            <p
              className={`text-xl font-semibold ${
                result.summary.erstjahrCashflowPA < 0 ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {formatCurrency(result.summary.erstjahrCashflowPA)}
            </p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Endwert Immobilie</p>
            <p className="text-xl font-semibold text-gray-800">
              {formatCurrency(result.summary.finalPropertyValue)}
            </p>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Cashflow-Übersicht
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('monthly')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Monatlich
            </button>
            <button
              onClick={() => setViewMode('annual')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'annual'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Jährlich
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  {viewMode === 'annual' ? 'Jahr' : 'Monat'}
                </th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">
                  Miete
                </th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">
                  Zinsen
                </th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">
                  Tilgung
                </th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">
                  Cashflow
                </th>
                <th className="px-4 py-3 text-right font-semibold text-gray-700">
                  Restschuld
                </th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((row, index) => {
                const isLast = isLastRow(index);
                const isInitial = row.period === 0;
                return (
                  <tr
                    key={row.period}
                    className={`border-b hover:bg-gray-50 ${
                      isLast ? 'bg-yellow-50 font-semibold' : ''
                    } ${isInitial ? 'bg-red-50 font-semibold' : ''}`}
                  >
                    <td className="px-4 py-3">
                      {isInitial 
                        ? 'Initial' 
                        : viewMode === 'annual' 
                          ? `Jahr ${row.period}` 
                          : `Monat ${row.period}`}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {formatCurrency(row.mieteinnahmen)}
                    </td>
                    <td className="px-4 py-3 text-right text-red-600">
                      {formatCurrency(row.zinsen)}
                    </td>
                    <td className="px-4 py-3 text-right text-blue-600">
                      {formatCurrency(row.tilgung)}
                    </td>
                    <td
                      className={`px-4 py-3 text-right font-medium ${
                        row.cashflow < 0 ? 'text-red-600' : 'text-green-600'
                      }`}
                    >
                      {formatCurrency(row.cashflow)}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {formatCurrency(row.restschuld)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="bg-gray-100 font-semibold">
              <tr>
                <td className="px-4 py-3">GESAMT</td>
                <td className="px-4 py-3 text-right">
                  {formatCurrency(
                    displayData.reduce((sum, row) => sum + row.mieteinnahmen, 0)
                  )}
                </td>
                <td className="px-4 py-3 text-right text-red-600">
                  {formatCurrency(displayData.reduce((sum, row) => sum + row.zinsen, 0))}
                </td>
                <td className="px-4 py-3 text-right text-blue-600">
                  {formatCurrency(displayData.reduce((sum, row) => sum + row.tilgung, 0))}
                </td>
                <td
                  className={`px-4 py-3 text-right ${
                    displayData.reduce((sum, row) => sum + row.cashflow, 0) < 0
                      ? 'text-red-600'
                      : 'text-green-600'
                  }`}
                >
                  {formatCurrency(displayData.reduce((sum, row) => sum + row.cashflow, 0))}
                </td>
                <td className="px-4 py-3 text-right">-</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {displayData.length > 12 && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAllMonths(!showAllMonths)}
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium"
            >
              {showAllMonths
                ? 'Weniger anzeigen'
                : `Alle ${displayData.length} ${viewMode === 'annual' ? 'Jahre' : 'Monate'} anzeigen`}
            </button>
          </div>
        )}

        {showAllMonths && displayData.length === result.monthly.length && (
          <div className="mt-4 space-y-2">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">
                <strong>Initial (Zeile 1):</strong> Initiale Investition - Eigenkapital + Nebenkosten (
                {formatCurrency(result.summary.eigenkapital)} negativer Cashflow zum Zeitpunkt 0)
              </p>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
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
