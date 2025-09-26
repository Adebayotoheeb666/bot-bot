import React from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

const navItems = [
  { icon: <DashboardOutlinedIcon className="nav-icon" />, label: 'Dashboard', href: '/' },
  { icon: <InsertChartOutlinedIcon className="nav-icon" />, label: 'Reports', href: '/reports' },
  { icon: <SwapHorizOutlinedIcon className="nav-icon" />, label: 'Currency Exchange', href: '/currency-exchange' },
  { icon: <PeopleOutlineIcon className="nav-icon" />, label: 'Members', href: '/members' },
  { icon: <BarChartOutlinedIcon className="nav-icon" />, label: 'Tickers', href: '/tickers' },
  { icon: <AccountBalanceWalletOutlinedIcon className="nav-icon" />, label: 'Transactions', href: '/transactions' },
  { icon: <InsertChartOutlinedIcon className="nav-icon" />, label: 'Charts', href: '/charts' },
  { icon: <AppsOutlinedIcon className="nav-icon" />, label: 'Apps', href: '/apps' },
  { icon: <WidgetsOutlinedIcon className="nav-icon" />, label: 'Features', href: '/features' },
  { icon: <TableChartOutlinedIcon className="nav-icon" />, label: 'Forms & Tables', href: '/forms-tables' },
  { icon: <WidgetsOutlinedIcon className="nav-icon" />, label: 'Widgets', href: '/widgets' },
  { icon: <DescriptionOutlinedIcon className="nav-icon" />, label: 'Pages', href: '/pages' },
  { icon: <VerifiedUserOutlinedIcon className="nav-icon" />, label: 'Authentication', href: '/authentication' },
  { icon: <LockOutlinedIcon className="nav-icon" />, label: 'Miscellaneous', href: '/miscellaneous' },
];

export default function Sidebar({ isOpen = false }: { isOpen?: boolean }) {
  const router = useRouter();
  return (
    <aside id="sidenav" className={`crypto-admin-sidenav${isOpen ? ' is-open' : ''}`}>
      <div className="sidenav-header">
        <div className="brand-dot" />
        <Typography className="brand-title" variant="h6">Crypto Admin</Typography>
      </div>
      <nav className="sidenav-nav">
        {navItems.map((item) => {
          const isActive = router.pathname === item.href;
          return (
            <Link href={item.href} key={item.label} className={`nav-link${isActive ? ' active' : ''}`}>
              {item.icon} {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="sidenav-footer" />
    </aside>
  );
}
