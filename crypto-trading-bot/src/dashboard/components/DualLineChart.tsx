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
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function DualLineChart() {
  const labels = ['2010', '2011', '2012', '2013', '2014'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Blue',
        data: [120, 90, 140, 110, 160],
        borderColor: '#3AB0FF',
        backgroundColor: 'rgba(58,176,255,0.18)',
        pointRadius: 2,
        borderWidth: 2.5,
        tension: 0.35,
        fill: false,
      },
      {
        label: 'Orange',
        data: [60, 150, 130, 170, 300],
        borderColor: '#FF8C6B',
        backgroundColor: 'rgba(255,140,107,0.18)',
        pointRadius: 2,
        borderWidth: 2.5,
        tension: 0.35,
        fill: false,
      },
    ],
  };
  const options = {
    plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
    interaction: { mode: 'index' as const, intersect: false },
    scales: {
      x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#9BB0C2' } },
      y: {
        min: 0,
        max: 300,
        ticks: { stepSize: 75, color: '#9BB0C2' },
        grid: { color: 'rgba(255,255,255,0.06)' },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  } as const;

  return <div style={{ height: 200 }}><Line data={data} options={options} /></div>;
}
