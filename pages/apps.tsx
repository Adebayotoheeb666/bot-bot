import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function AppsPage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Apps</Typography>
          <Typography color="inherit">Manage connected apps and integrations.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
