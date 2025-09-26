import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function WidgetsPage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Widgets</Typography>
          <Typography color="inherit">Reusable UI widgets and components.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
