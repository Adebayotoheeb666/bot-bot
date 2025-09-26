import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function CurrencyExchangePage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Currency Exchange</Typography>
          <Typography color="inherit">Convert between assets and view rates.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
