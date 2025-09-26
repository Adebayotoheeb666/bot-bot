import { BinanceExchange } from './exchange/binance';
import { TradeManager } from './trade-manager';
import { TelegramNotifier } from './notifications/telegram';
import { MachineLearning } from './machine-learning';

class CryptoTradingBot {
    private exchange: BinanceExchange;
    private tradeManager: TradeManager;
    private notifier: TelegramNotifier;
    private machineLearning: MachineLearning;

    constructor() {
        // Provide default values for demonstration; replace with real config/user values as needed
        const stopLossPercentage = 2;
        const takeProfitPercentage = 4;
        const tradeSize = 0.01;
        const maxTrades = 3;
        const botToken = process.env.TELEGRAM_BOT_TOKEN || 'dummy_token';
        const chatId = process.env.TELEGRAM_CHAT_ID || 'dummy_chat_id';

        this.exchange = new BinanceExchange();
        this.tradeManager = new TradeManager(stopLossPercentage, takeProfitPercentage, tradeSize, maxTrades);
        this.notifier = new TelegramNotifier(botToken, chatId);
        this.machineLearning = new MachineLearning();
    }

    public async initialize() {
        // Removed await this.exchange.connect(); as it does not exist
        this.startTradingLoop();
    }

    private startTradingLoop() {
        setInterval(async () => {
            // Use getAllPairs as a placeholder for market data
            const marketData = await this.exchange.getAllPairs();
            this.machineLearning.adaptStrategies(marketData);
            // Example: Execute a trade for a hardcoded pair and price (for demo)
            const pair = 'BTCUSDT';
            const price = 50000; // Replace with real price from marketData
            this.tradeManager.executeTrade(pair, price);
        }, 60000); // Adjust the interval as needed
    }
}

const bot = new CryptoTradingBot();
bot.initialize();