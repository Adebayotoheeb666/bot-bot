export class MACD {
    private shortPeriod: number;
    private longPeriod: number;
    private signalPeriod: number;

    constructor(shortPeriod: number = 12, longPeriod: number = 26, signalPeriod: number = 9) {
        this.shortPeriod = shortPeriod;
        this.longPeriod = longPeriod;
        this.signalPeriod = signalPeriod;
    }

    public calculate(prices: number[]): { macd: number[], signal: number[], histogram: number[] } {
        const shortEMA = this.calculateEMA(prices, this.shortPeriod);
        const longEMA = this.calculateEMA(prices, this.longPeriod);
        const macd = shortEMA.map((value, index) => value - longEMA[index]);
        const signal = this.calculateEMA(macd, this.signalPeriod);
        const histogram = macd.map((value, index) => value - signal[index]);

        return { macd, signal, histogram };
    }

    private calculateEMA(prices: number[], period: number): number[] {
        const k = 2 / (period + 1);
        const ema: number[] = [];
        ema[0] = prices[0]; // Start with the first price

        for (let i = 1; i < prices.length; i++) {
            ema[i] = (prices[i] - ema[i - 1]) * k + ema[i - 1];
        }

        return ema;
    }
}