import { NextApiRequest, NextApiResponse } from 'next';
import { UserManager, User } from '../../crypto-trading-bot/src/bot/user/UserManager';

const userManager = new UserManager();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { id, name, apiKey, apiSecret, telegramBotToken, telegramChatId } = req.body;
    if (!id || !name || !apiKey || !apiSecret) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const user: User = { id, name, apiKey, apiSecret, telegramBotToken, telegramChatId };
    userManager.addUser(user);
    return res.status(201).json({ success: true });
  }
  if (req.method === 'GET') {
    // List all users (for admin/demo only)
    return res.status(200).json(userManager.listUsers());
  }
  res.status(405).json({ error: 'Method not allowed' });
}
