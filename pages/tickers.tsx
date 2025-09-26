import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function TickersPage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Tickers</Typography>
          <Typography color="inherit">Browse and track market tickers.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
