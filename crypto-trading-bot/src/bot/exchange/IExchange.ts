export interface IExchange {
    authenticate(apiKey?: string, apiSecret?: string): void;
    getAllPairs(): Promise<any>;
    placeOrder(symbol: string, side: 'BUY' | 'SELL', quantity: number, price: number, stopLoss?: number, takeProfit?: number): Promise<any>;
    getAccountInfo(): Promise<any>;
    // Add more generic exchange methods as needed
}
