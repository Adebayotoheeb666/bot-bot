import { NextApiRequest, NextApiResponse } from 'next';
import { UserManager } from '../../crypto-trading-bot/src/bot/user/UserManager';

const userManager = new UserManager();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { id, apiKey, apiSecret } = req.body;
  const user = userManager.getUser(id);
  if (!user || user.apiKey !== apiKey || user.apiSecret !== apiSecret) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  // For demo: return user info as a session (in production, use JWT/cookies)
  return res.status(200).json({ success: true, user });
}
