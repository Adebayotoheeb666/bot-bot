import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Trade } from '../../types';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface TradeChartProps {
  trades: Trade[];
}

export default function TradeChart({ trades }: TradeChartProps) {
  // Use entryPrice for price chart, and createdAt for time
  const labels = trades.length ? trades.map((t) => new Date(t.createdAt).toLocaleTimeString()) : [''];
  const values = trades.length ? trades.map((t) => t.entryPrice) : [0];
  const data = {
    labels,
    datasets: [
      {
        label: 'Entry Price',
        data: values,
        borderColor: '#3AB0FF',
        backgroundColor: 'rgba(58,176,255,0.15)',
        tension: 0.25,
        pointRadius: 2,
        borderWidth: 2.5,
      },
    ],
  };
  const options = {
    plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
    interaction: { mode: 'index' as const, intersect: false },
    scales: {
      x: { grid: { color: 'rgba(255,255,255,0.08)' }, ticks: { color: '#d6e1ff' } },
      y: { grid: { color: 'rgba(255,255,255,0.12)' }, ticks: { color: '#d6e1ff' } },
    },
    responsive: true,
    maintainAspectRatio: false,
  } as const;
  return <div style={{ height: 180 }}><Line data={data} options={options} /></div>;
}
