import { UserManager, User } from './UserManager';
import { MachineLearningAdapter } from '../machine-learning';
import { BinanceExchange } from '../exchange/binance';

// Singleton for managing per-user exchange instances
class ExchangeInstanceManager {
  private static instances: Map<string, BinanceExchange> = new Map();

  static getInstance(user: User): BinanceExchange {
    if (!this.instances.has(user.id)) {
      const mlAdapter = new MachineLearningAdapter();
      this.instances.set(user.id, new BinanceExchange(user.apiKey, user.apiSecret, user, mlAdapter));
    }
    return this.instances.get(user.id)!;
  }
}

export default ExchangeInstanceManager;
