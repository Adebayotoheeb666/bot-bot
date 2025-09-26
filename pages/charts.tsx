import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function ChartsPage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Charts</Typography>
          <Typography color="inherit">Explore technical charts and indicators.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
