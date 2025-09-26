import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function TransactionsPage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Transactions</Typography>
          <Typography color="inherit">View and filter transaction history.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
