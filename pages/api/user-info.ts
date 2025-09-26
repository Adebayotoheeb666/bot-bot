import { NextApiRequest, NextApiResponse } from 'next';
import ExchangeInstanceManager from '../../crypto-trading-bot/src/bot/user/ExchangeInstanceManager';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const user = { id: 'guest', name: 'Guest', apiKey: '', apiSecret: '' };
  const exchange = ExchangeInstanceManager.getInstance(user as any);
  return res.status(200).json(exchange.getUserInfo());
}
