import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setNavOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <Box className={`crypto-admin${navOpen ? ' nav-open' : ''}`}>
      <Sidebar isOpen={navOpen} />
      <main className="crypto-admin-main">
        <Topbar lang={lang} setLang={setLang} onMenuToggle={() => setNavOpen(v => !v)} />
        <section className="cards-grid" style={{ paddingTop: 16 }}>
          {children}
        </section>
      </main>
      {navOpen && <div className="sidenav-backdrop" onClick={() => setNavOpen(false)} />}
    </Box>
  );
}
