import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function ReportsPage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Reports</Typography>
          <Typography color="inherit">Generate and view performance reports.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
