import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import CandleChart from './CandleChart';
import { Trade } from '../../types';

export default function MarketCard({ trades }: { trades: Trade[] }) {
  return (
    <Card className="card-dark col-3 row-span-2">
      <CardContent>
        <div className="card-header">
          <Typography className="card-title">Bitcoin BTC</Typography>
          <div className="timeframe">
            <Button size="small" variant="contained" className="tf-btn active">1H</Button>
            <Button size="small" variant="outlined" className="tf-btn">24H</Button>
            <Button size="small" variant="outlined" className="tf-btn">1W</Button>
            <Button size="small" variant="outlined" className="tf-btn">1Y</Button>
          </div>
        </div>
        <div className="market-header">
          <div className="market-price-lg">$48,025.30 <span className="positive">+2.85%</span></div>
          <div className="market-sub">Current Market Price</div>
        </div>
        <div className="chart-wrap">
          <CandleChart />
        </div>
      </CardContent>
    </Card>
  );
}
