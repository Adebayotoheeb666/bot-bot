import dynamic from 'next/dynamic';
import { Card, CardContent, Typography } from '@mui/material';
const AdminLayout = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/AdminLayout'), { ssr: false });

export default function AuthenticationPage() {
  return (
    <AdminLayout>
      <Card className="card-dark">
        <CardContent>
          <Typography className="section-title">Authentication</Typography>
          <Typography color="inherit">Sign in, sign up, and user security flows.</Typography>
        </CardContent>
      </Card>
    </AdminLayout>
  );
}
