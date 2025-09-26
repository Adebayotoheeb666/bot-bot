export interface Strategy {
    name: string;
    generateSignal(data: any): 'BUY' | 'SELL' | 'HOLD';
}
