import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function MembersPage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Members</Typography>
          <Typography color="inherit">Manage team and permissions.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
