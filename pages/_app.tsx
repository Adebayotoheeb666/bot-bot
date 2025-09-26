import type { AppProps } from 'next/app';
import '../crypto-trading-bot/src/dashboard/styles/dashboard.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
