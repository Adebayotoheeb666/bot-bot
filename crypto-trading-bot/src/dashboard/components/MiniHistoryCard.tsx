import React from 'react';
import { Card, CardContent } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export default function MiniHistoryCard() {
  const labels = Array.from({ length: 20 }).map((_, i) => `${i}`);
  const data = {
    labels,
    datasets: [
      {
        data: [4,6,5,7,6,8,7,9,8,10,9,11,10,9,8,9,10,11,10,12],
        borderColor: '#3AB0FF',
        backgroundColor: 'rgba(58,176,255,0.20)',
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
        tension: 0.35,
      },
    ],
  };
  const options = {
    plugins: { legend: { display: false }, tooltip: { enabled: false } },
    scales: { x: { display: false }, y: { display: false } },
    elements: { line: { borderJoinStyle: 'round' as const } },
    responsive: true,
    maintainAspectRatio: false,
  } as const;
  return (
    <Card className="card-dark">
      <CardContent>
        <div className="mini-history">
          <div className="mini-history-text">
            <div className="mini-title">BTCB/USD</div>
            <div className="mini-sub">$8,147 3542</div>
          </div>
          <div className="mini-chart"><div style={{ height: 48 }}><Line data={data} options={options} /></div></div>
        </div>
      </CardContent>
    </Card>
  );
}
