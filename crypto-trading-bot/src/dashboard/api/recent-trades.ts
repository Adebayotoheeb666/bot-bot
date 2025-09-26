import { NextApiRequest, NextApiResponse } from 'next';
import { binanceExchangeInstance } from '../../bot/binanceInstance';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;
  res.status(200).json(binanceExchangeInstance.getRecentTrades(limit));
}
