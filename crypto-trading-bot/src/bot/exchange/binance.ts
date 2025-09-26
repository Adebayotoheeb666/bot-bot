import axios, { Method, isAxiosError } from 'axios';
import crypto from 'crypto';
import { IExchange } from './IExchange';
import { TelegramNotifier } from '../notifications/telegram';
import { MachineLearningAdapter } from '../machine-learning';
import { User } from '../user/UserManager';

export class BinanceExchange implements IExchange {
    private apiKey: string = '';
    private apiSecret: string = '';
    private baseUrl: string = process.env.BINANCE_BASE_URL || 'https://api.binance.com/api/v3';
    private tradeLimit: number = 5; // Default max trades per session
    private tradesExecuted: number = 0;
    private minTradeSize: number = 0.001; // Example minimum trade size
    private telegramNotifier?: TelegramNotifier;
    private mlAdapter?: MachineLearningAdapter;
    private user?: User;
    private recentTrades: any[] = [];
    private lastAdaptation: any;
    private demoMode: boolean = false;

    constructor(apiKey?: string, apiSecret?: string, user?: User, mlAdapter?: MachineLearningAdapter) {
        this.authenticate(apiKey, apiSecret);
        if (user) this.user = user;
        if (mlAdapter) this.mlAdapter = mlAdapter;
    }

    public authenticate(apiKey?: string, apiSecret?: string): void {
        this.apiKey = apiKey || process.env.BINANCE_API_KEY || '';
        this.apiSecret = apiSecret || process.env.BINANCE_API_SECRET || '';
        this.demoMode = !this.apiKey || !this.apiSecret;
    }

    private isSignedEndpoint(endpoint: string): boolean {
        // Known signed endpoints; extend as needed
        return ['/account', '/order', '/order/oco', '/openOrders', '/myTrades'].includes(endpoint);
    }

    private async sendRequest(endpoint: string, method: string = 'GET', data: any = null) {
        if (this.demoMode) {
            if (endpoint === '/exchangeInfo') {
                return { symbols: [{ symbol: 'BTCUSDT' }, { symbol: 'ETHUSDT' }] };
            }
            if (endpoint === '/account') {
                return { balances: [{ asset: 'BTC', free: '1.0' }, { asset: 'USDT', free: '10000.0' }] };
            }
            if (endpoint === '/order' || endpoint === '/order/oco') {
                return { status: 'FILLED', orderId: Math.floor(Math.random() * 100000) };
            }
            return { demo: true, endpoint };
        }

        const methodUpper = (method || 'GET').toUpperCase();
        let url = `${this.baseUrl}${endpoint}`;
        const headers: Record<string, string> = {
            'X-MBX-APIKEY': this.apiKey,
        };

        try {
            // Prepare params/signature
            if (this.isSignedEndpoint(endpoint)) {
                const params = { ...(data || {}), timestamp: Date.now(), recvWindow: 5000 } as Record<string, any>;
                const qs = new URLSearchParams(
                    Object.entries(params).map(([k, v]) => [k, v !== undefined && v !== null ? String(v) : ''])
                ).toString();
                const signature = crypto.createHmac('sha256', this.apiSecret).update(qs).digest('hex');

                if (methodUpper === 'GET') {
                    url = `${url}?${qs}&signature=${signature}`;
                    const response = await axios({ method: 'GET', url, headers });
                    return response.data;
                } else {
                    headers['Content-Type'] = 'application/x-www-form-urlencoded';
                    const body = `${qs}&signature=${signature}`;
                    const response = await axios({ method: methodUpper as Method, url, headers, data: body });
                    return response.data;
                }
            } else {
                if (methodUpper === 'GET') {
                    const qs = data ? new URLSearchParams(
                        Object.entries(data).map(([k, v]) => [k, v !== undefined && v !== null ? String(v) : ''])
                    ).toString() : '';
                    if (qs) url = `${url}?${qs}`;
                    const response = await axios({ method: 'GET', url, headers });
                    return response.data;
                } else {
                    const response = await axios({ method: methodUpper as Method, url, headers, data });
                    return response.data;
                }
            }
        } catch (error: any) {
            if (isAxiosError(error)) {
                const status = error.response?.status;
                const msg = error.response?.data?.msg || error.message;
                throw new Error(
                    `Binance API request failed${status ? ` (status ${status})` : ''}: ${msg}`
                );
            }
            if (error instanceof Error) {
                throw new Error(`Binance API request failed: ${error.message}`);
            }
            throw new Error('Binance API request failed: Unknown error');
        }
    }

    public async getAllPairs() {
        return await this.sendRequest('/exchangeInfo');
    }

    public setTradeLimit(limit: number): void {
        this.tradeLimit = limit;
    }

    public setMinTradeSize(size: number): void {
        this.minTradeSize = size;
    }

    public setTelegramNotifier(botToken: string, chatId: string): void {
        this.telegramNotifier = new TelegramNotifier(botToken, chatId);
    }

    public getUserInfo() {
        return this.user ? { id: this.user.id, name: this.user.name } : null;
    }

    public getMLInfo() {
        if (!this.mlAdapter) return null;
        // Example: Return last adaptation or prediction (expand as needed)
        return {
            lastAdaptation: this.lastAdaptation || null,
        };
    }

    public getRecentTrades(limit: number = 10) {
        return this.recentTrades.slice(-limit);
    }

    public async placeOrder(symbol: string, side: 'BUY' | 'SELL', quantity: number, price: number, stopLoss?: number, takeProfit?: number) {
        // Parameter validation
        if (!symbol || !side || !quantity || !price) {
            throw new Error('Missing required parameters for placing order.');
        }
        if (quantity < this.minTradeSize) {
            throw new Error(`Trade size must be at least ${this.minTradeSize}`);
        }
        if (quantity <= 0 || price <= 0) {
            throw new Error('Quantity and price must be positive numbers.');
        }
        if (this.tradesExecuted >= this.tradeLimit) {
            throw new Error('Trade limit reached for this session.');
        }

        // OCO order for stop-loss/take-profit
        let result;
        if (stopLoss && takeProfit) {
            const ocoOrderData: any = {
                symbol,
                side,
                quantity,
                price: takeProfit,
                stopPrice: stopLoss,
                stopLimitPrice: stopLoss,
                stopLimitTimeInForce: 'GTC',
            };
            this.tradesExecuted++;
            result = await this.sendRequest('/order/oco', 'POST', ocoOrderData);
        } else {
            const orderData = {
                symbol,
                side,
                type: 'LIMIT',
                quantity,
                price,
                timeInForce: 'GTC',
            };
            this.tradesExecuted++;
            result = await this.sendRequest('/order', 'POST', orderData);
        }
        // Record trade
        this.recentTrades.push({ symbol, side, quantity, price, stopLoss, takeProfit, time: new Date(), result });
        // Optionally record ML adaptation
        if (this.mlAdapter) {
            this.lastAdaptation = this.mlAdapter.adaptStrategy('default', this.recentTrades, {});
        }
        return result;
    }

    public async getAccountInfo() {
        return await this.sendRequest('/account');
    }

    public async executeTradeFromSignal(
        symbol: string,
        signal: 'BUY' | 'SELL' | 'HOLD',
        price: number,
        options?: {
            tradeSize?: number;
            stopLoss?: number;
            takeProfit?: number;
        }
    ) {
        if (signal === 'HOLD') {
            return { status: 'No trade executed', reason: 'Signal is HOLD' };
        }
        const tradeSize = options?.tradeSize || this.minTradeSize;
        const stopLoss = options?.stopLoss;
        const takeProfit = options?.takeProfit;
        if (this.tradesExecuted >= this.tradeLimit) {
            return { status: 'Trade limit reached', reason: 'No trade executed' };
        }
        const result = await this.placeOrder(symbol, signal, tradeSize, price, stopLoss, takeProfit);
        // Send Telegram notification if configured
        if (this.telegramNotifier) {
            const msg = `Trade executed: ${signal} ${tradeSize} ${symbol} at ${price}`;
            await this.telegramNotifier.sendTradeNotification(msg);
        }
        return result;
    }

    // Example: Adapt strategy before executing trade
    public adaptAndExecuteStrategy(strategyName: string, tradeHistory: any[], marketData: any, ...args: any[]) {
        if (this.mlAdapter) {
            const updatedParams = this.mlAdapter.adaptStrategy(strategyName, tradeHistory, marketData);
            // Use updatedParams to modify strategy or trade args
            // ...
        }
        // Proceed to execute strategy/trade
    }

    // Dashboard integration points
    // Example: Export trade execution events for dashboard monitoring
    public getTradeStats() {
        return {
            tradesExecuted: this.tradesExecuted,
            tradeLimit: this.tradeLimit,
            minTradeSize: this.minTradeSize,
        };
    }

    // Additional methods for handling trades, fetching market data, etc. can be added here
}
