import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function HistoryKPI() {
  return (
    <Card className="card-dark col-3">
      <CardContent>
        <Typography className="section-title">History</Typography>
        <div className="history-grid">
          <div className="history-card positive">
            <div className="history-title">Extra Spending</div>
            <div className="history-value">$4,582</div>
            <div className="history-delta"><ArrowUpwardIcon /> +$148.14</div>
          </div>
          <div className="history-card negative">
            <div className="history-title">Expenses</div>
            <div className="history-value">$100.14</div>
            <div className="history-delta"><ArrowDownwardIcon /> -$116.14</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
