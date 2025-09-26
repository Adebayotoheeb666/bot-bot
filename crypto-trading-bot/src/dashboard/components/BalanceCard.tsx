import React from 'react';
import { Card, CardContent, Typography, Chip } from '@mui/material';

export default function BalanceCard() {
  return (
    <Card className="card-dark col-2">
      <CardContent>
        <div className="card-header">
          <Typography className="card-title">Current Balance</Typography>
          <Chip size="small" label="USD" className="pill-muted" />
        </div>
        <div className="card-metric">
          <Typography className="metric-value">$3,400.80 USD</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
