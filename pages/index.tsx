import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('../crypto-trading-bot/src/dashboard/components/Dashboard'), { ssr: false });

export default function HomePage() {
  return <Dashboard />;
}
