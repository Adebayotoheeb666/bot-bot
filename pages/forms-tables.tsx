import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function FormsTablesPage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Forms & Tables</Typography>
          <Typography color="inherit">Create and manage forms and data tables.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
