import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const entries = [
  { name: 'Cameron B. BTC', amount: '0.001 BTC', time: '1 Day ago', rating: '4.4(1,210 ratings)' },
  { name: 'Jane C. BTC', amount: '0.001 BTC', time: '4 Day ago', rating: '4.0(1,100 ratings)' },
  { name: 'Jenny W. BTC', amount: '0.001 BTC', time: '10 Day ago', rating: '3.5(810 ratings)' },
];

export default function RecentActivity() {
  return (
    <Card className="card-dark col-2">
      <CardContent>
        <div className="card-header">
          <Typography className="card-title">Recent Activity</Typography>
          <div className="filters">
            <Button size="small" variant="contained" className="filter-btn">Sent</Button>
            <Button size="small" variant="outlined" className="filter-btn">Currency</Button>
            <Button size="small" variant="outlined" className="filter-btn">All Level</Button>
          </div>
        </div>
        <div className="activity-list">
          {entries.map((t, i) => (
            <div className="activity-item" key={i}>
              <div className="activity-meta">
                <div className="activity-avatar">{t.name[0]}</div>
                <div>
                  <div className="activity-title">{t.name}</div>
                  <div className="activity-sub">{t.time} · {t.rating}</div>
                </div>
              </div>
              <div className="activity-amount">{t.amount}</div>
              <Button size="small" variant="outlined" className="details-btn">Details</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
