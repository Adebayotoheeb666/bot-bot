import type { NextApiRequest, NextApiResponse } from 'next';
import { binanceExchangeInstance } from '../../crypto-trading-bot/src/bot/binanceInstance';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Use getAccountInfo to fetch Binance account details
    const accountInfo = await (binanceExchangeInstance as any).getAccountInfo();
    res.status(200).json({ success: true, accountInfo });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message || error.toString() });
  }
}
