import { NextApiRequest, NextApiResponse } from 'next';
import { binanceExchangeInstance } from '../../bot/binanceInstance';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(binanceExchangeInstance.getUserInfo());
}
