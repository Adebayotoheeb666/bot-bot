export interface Trade {
    id: string;
    pair: string;
    size: number;
    entryPrice: number;
    stopLoss: number;
    takeProfit: number;
    status: 'open' | 'closed' | 'pending';
    createdAt: Date;
    updatedAt: Date;
}

export interface TradingStrategy {
    executeTrade(trade: Trade): Promise<void>;
    calculateIndicators(data: number[]): number[];
}

export interface Notification {
    send(message: string): Promise<void>;
}

export interface Exchange {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    getMarketData(pair: string): Promise<number[]>;
    placeOrder(trade: Trade): Promise<void>;
}

export interface MachineLearningModel {
    train(data: any[]): Promise<void>;
    predict(data: any[]): Promise<any>;
}