import { BinanceExchange } from './exchange/binance';
import { MachineLearningAdapter } from './machine-learning';
import { User } from './user/UserManager';

// Example: create a default user and ML adapter for demo
const defaultUser: User = {
  id: 'demo',
  name: 'Demo User',
  apiKey: process.env.BINANCE_API_KEY || '',
  apiSecret: process.env.BINANCE_API_SECRET || '',
};
const mlAdapter = new MachineLearningAdapter();

export const binanceExchangeInstance = new BinanceExchange(
  defaultUser.apiKey,
  defaultUser.apiSecret,
  defaultUser,
  mlAdapter
);
