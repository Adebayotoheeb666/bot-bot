import React, { useEffect, useState } from 'react';
import TradeTable from './TradeTable';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import BitcoinCard from './BitcoinCard';
import BalanceCard from './BalanceCard';
import RecentActivity from './RecentActivity';
import MarketCard from './MarketCard';
import HistoryKPI from './HistoryKPI';
import MiniHistoryCard from './MiniHistoryCard';

export default function Dashboard() {
  const [recentTrades, setRecentTrades] = useState<any[]>([]);
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [locale, setLocale] = useState<any>({});
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchJson = async (url: string) => {
      try {
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) return null;
        return await res.json().catch(() => null);
      } catch {
        return null;
      }
    };

    (async () => {
      const trades = await fetchJson('/api/recent-trades?limit=10');
      if (trades) setRecentTrades(Array.isArray(trades) ? trades : []);
    })();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    import(`../locales/${lang}.json`).then(mod => setLocale(mod.default || mod));
  }, [lang]);

  return (
    <Box className={`crypto-admin${navOpen ? ' nav-open' : ''}`}>
      <Sidebar isOpen={navOpen} />
      <main className="crypto-admin-main">
        <Topbar lang={lang} setLang={setLang} onMenuToggle={() => setNavOpen(v => !v)} />
        <section className="cards-grid three-col">
          {/* Row 1 */}
          <BitcoinCard trades={recentTrades} />
          <BalanceCard />
          <MarketCard trades={recentTrades} />
          {/* Row 2 */}
          <RecentActivity />
          <MiniHistoryCard />
          {/* MarketCard spans two rows via CSS */}
          {/* Row 3: KPI under market */}
          <HistoryKPI />
          {/* Optional details table spanning first 2 columns */}
          <Card className="card-dark col-1-2">
            <CardContent>
              <Typography className="section-title">Details</Typography>
              <TradeTable trades={recentTrades} />
            </CardContent>
          </Card>
        </section>
      </main>
      {navOpen && <div className="sidenav-backdrop" onClick={() => setNavOpen(false)} />}
    </Box>
  );
}
