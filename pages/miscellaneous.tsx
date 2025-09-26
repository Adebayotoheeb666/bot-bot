import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function MiscellaneousPage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Miscellaneous</Typography>
          <Typography color="inherit">Other tools and utilities.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
