import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function FeaturesPage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Features</Typography>
          <Typography color="inherit">Discover available features.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
