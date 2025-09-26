import type { NextApiRequest, NextApiResponse } from 'next';
import { binanceExchangeInstance } from '../../crypto-trading-bot/src/bot/binanceInstance';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const meta = {
    hasKey: Boolean(process.env.BINANCE_API_KEY),
    hasSecret: Boolean(process.env.BINANCE_API_SECRET),
    baseUrl: process.env.BINANCE_BASE_URL || 'https://api.binance.com/api/v3',
  };
  try {
    const accountInfo = await (binanceExchangeInstance as any).getAccountInfo();
    res.status(200).json({ success: true, accountInfo, meta });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message || error.toString(), meta });
  }
}
