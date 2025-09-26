import type { NextApiRequest, NextApiResponse } from 'next';
import ExchangeInstanceManager from '../../crypto-trading-bot/src/bot/user/ExchangeInstanceManager';
import type { Trade } from '../../crypto-trading-bot/src/types';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = { id: 'guest', name: 'Guest', apiKey: '', apiSecret: '' };
  const exchange = ExchangeInstanceManager.getInstance(user as any);
  const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 10;
  const raw = (exchange.getRecentTrades(limit) || []) as any[];

  const trades: Trade[] = raw.map((t: any, idx: number) => {
    const created = t.time ? new Date(t.time) : new Date();
    const id = (t.result && (t.result.orderId ?? t.result.clientOrderId))
      ? String(t.result.orderId ?? t.result.clientOrderId)
      : `${t.symbol}-${t.side}-${created.getTime()}-${idx}`;

    const statusRaw = (t.result?.status || '').toString().toUpperCase();
    const status: Trade['status'] = statusRaw === 'FILLED' ? 'closed' : statusRaw === 'CANCELED' ? 'closed' : 'pending';

    return {
      id,
      pair: t.symbol || '',
      size: typeof t.quantity === 'number' ? t.quantity : Number(t.quantity) || 0,
      entryPrice: typeof t.price === 'number' ? t.price : Number(t.price) || 0,
      stopLoss: typeof t.stopLoss === 'number' ? t.stopLoss : Number(t.stopLoss) || 0,
      takeProfit: typeof t.takeProfit === 'number' ? t.takeProfit : Number(t.takeProfit) || 0,
      status,
      createdAt: created,
      updatedAt: new Date(),
    } as Trade;
  });

  return res.status(200).json(trades);
}
