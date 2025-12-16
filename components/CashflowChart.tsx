'use client';

import { CalculationResult } from '@/lib/types';
import { aggregateToAnnual } from '@/lib/calculator';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

interface CashflowChartProps {
  result: CalculationResult;
}

export default function CashflowChart({ result }: CashflowChartProps) {
  // Get annual data
  const annualData = aggregateToAnnual(result.monthly);
  
  // Prepare chart data with cumulative wealth
  let cumulativeWealth = 0;
  const chartData = annualData
    .filter(item => item.period > 0) // Skip month 0 (initial investment)
    .map((item, index) => {
      cumulativeWealth += item.cashflow;
      
      return {
        year: `Jahr ${item.period}`,
        yearNum: item.period,
        cashflow: Math.round(item.cashflow),
        vermoegenAufbau: Math.round(cumulativeWealth),
      };
    });

  const formatCurrency = (value: number) => {
    if (Math.abs(value) >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M €`;
    }
    if (Math.abs(value) >= 1000) {
      return `${(value / 1000).toFixed(0)}k €`;
    }
    return `${value} €`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-medium text-gray-800 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
      <h2 className="text-base font-semibold text-gray-800 mb-4">
        Cashflow & Vermögensaufbau
      </h2>
      
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={chartData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="yearNum" 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickFormatter={(value) => `${value}`}
              interval="preserveStartEnd"
            />
            <YAxis 
              yAxisId="left"
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickFormatter={formatCurrency}
              width={60}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right"
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickFormatter={formatCurrency}
              width={60}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
            />
            <ReferenceLine yAxisId="left" y={0} stroke="#9ca3af" strokeDasharray="3 3" />
            
            {/* Cashflow Bars */}
            <Bar 
              yAxisId="left"
              dataKey="cashflow" 
              name="Jährlicher Cashflow"
              fill="#7099A3"
              radius={[2, 2, 0, 0]}
            />
            
            {/* Cumulative Wealth Line */}
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="vermoegenAufbau" 
              name="Kumulierter Vermögensaufbau"
              stroke="#4B644A"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: '#4B644A' }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Summary below chart */}
      <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-gray-600">Ø Jährlicher Cashflow</p>
          <p className="font-semibold text-gray-800">
            {formatCurrency(Math.round(chartData.reduce((sum, d) => sum + d.cashflow, 0) / chartData.length))}
          </p>
        </div>
        <div>
          <p className="text-gray-600">Vermögen nach {result.inputs.haltedauer} Jahren</p>
          <p className="font-semibold text-[#4B644A]">
            {formatCurrency(chartData[chartData.length - 1]?.vermoegenAufbau || 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
