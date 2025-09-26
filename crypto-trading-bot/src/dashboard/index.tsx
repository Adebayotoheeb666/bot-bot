import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/dashboard.css';
import TradeTable from './components/TradeTable';
import en from './locales/en.json';
import ar from './locales/ar.json';

const locales = { en, ar };

const App = () => {
    const [language, setLanguage] = useState<'en' | 'ar'>('en');
    const t = (key: string) => {
        const keys = key.split('.');
        let value: any = locales[language];
        keys.forEach(k => { value = value?.[k]; });
        return value || key;
    };
    // Example trades data
    const trades: any[] = [];
    return (
        <div className="dashboard">
            <h1>{t('dashboard.title') || t('title')}</h1>
            <div>
                <label>{t('dashboard.settings.language') || t('dashboard.language')}</label>
                <select value={language} onChange={e => setLanguage(e.target.value as 'en' | 'ar')}>
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                </select>
            </div>
            <TradeTable trades={trades} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);