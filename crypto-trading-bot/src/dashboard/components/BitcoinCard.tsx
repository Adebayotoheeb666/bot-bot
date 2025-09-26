import React from 'react';
import { Card, CardContent, Typography, Chip, Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DualLineChart from './DualLineChart';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import OutboundOutlinedIcon from '@mui/icons-material/OutboundOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import { Trade } from '../../types';

const actions = [
  { icon: <AccountBalanceWalletOutlinedIcon />, label: 'Receive' },
  { icon: <PaidOutlinedIcon />, label: 'Top Up' },
  { icon: <LocalAtmOutlinedIcon />, label: 'Find ATM' },
  { icon: <AccountBalanceOutlinedIcon />, label: 'Bank AC' },
  { icon: <AssessmentOutlinedIcon />, label: 'Stats' },
  { icon: <SwapHorizOutlinedIcon />, label: 'Transfer' },
  { icon: <CreditCardOutlinedIcon />, label: 'Cards' },
  { icon: <ReceiptLongOutlinedIcon />, label: 'Pay Bill' },
  { icon: <PaymentsOutlinedIcon />, label: 'Payment' },
  { icon: <OutboundOutlinedIcon />, label: 'Transactions' },
  { icon: <HistoryToggleOffOutlinedIcon />, label: 'Withdraw' },
  { icon: <ConfirmationNumberOutlinedIcon />, label: 'Voucher' },
];

export default function BitcoinCard({ trades }: { trades: Trade[] }) {
  return (
    <Card className="card-dark col-1">
      <CardContent>
        <div className="card-header">
          <Typography className="card-title">Bitcoin</Typography>
          <Chip size="small" label="Current Price" className="pill-muted" />
        </div>
        <div className="card-metric">
          <Typography className="metric-value">$4,231.30</Typography>
          <div className={`metric-delta negative`}><ArrowDownwardIcon /> 1.25% This Week</div>
        </div>
        <div className="chart-wrap">
          <DualLineChart />
        </div>
        <div className="quick-actions qa-4x3">
          {actions.map(a => (
            <Button className="qa-btn" key={a.label} startIcon={a.icon}>{a.label}</Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
