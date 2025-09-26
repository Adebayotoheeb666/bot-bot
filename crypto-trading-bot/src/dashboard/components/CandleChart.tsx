import React from 'react';
import { Chart, registerables } from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';
import { Chart as ReactChart } from 'react-chartjs-2';

// Register Chart.js and financial plugin components (no FinancialController in v0.2.x)
Chart.register(...registerables, CandlestickController, CandlestickElement);

const sampleData = [
  { x: new Date('2021-10-07T23:00:00Z').getTime(), o: 6600, h: 6620, l: 6580, c: 6610 },
  { x: new Date('2021-10-08T04:00:00Z').getTime(), o: 6610, h: 6630, l: 6590, c: 6600 },
  { x: new Date('2021-10-08T08:00:00Z').getTime(), o: 6600, h: 6640, l: 6585, c: 6635 },
  { x: new Date('2021-10-08T12:00:00Z').getTime(), o: 6635, h: 6650, l: 6600, c: 6615 },
  { x: new Date('2021-10-08T16:00:00Z').getTime(), o: 6615, h: 6625, l: 6575, c: 6580 },
  { x: new Date('2021-10-08T20:00:00Z').getTime(), o: 6580, h: 6610, l: 6560, c: 6605 },
];

export default function CandleChart() {
  const data = {
    datasets: [
      {
        label: 'BTC',
        data: sampleData,
        type: 'candlestick' as const,
        borderColor: '#3AB0FF', // Use a string instead of an object
        color: '#3AB0FF', // Use a string instead of an object
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
    interaction: { mode: 'index' as const, intersect: false },
    scales: {
      x: {
        type: 'time' as const,
        time: { unit: 'hour' as const, tooltipFormat: 'HH:mm' },
        grid: { color: 'rgba(255,255,255,0.06)' },
        ticks: { color: '#9BB0C2', maxRotation: 0 },
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.06)' },
        ticks: { color: '#9BB0C2' },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  } as const;

  return <div style={{ height: 280 }}><ReactChart type="candlestick" data={data} options={options} /></div>;
}
