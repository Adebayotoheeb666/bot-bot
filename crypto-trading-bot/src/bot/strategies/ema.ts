class EMA {
    private period: number;

    constructor(period: number) {
        this.period = period;
    }

    calculate(prices: number[]): number[] {
        const ema: number[] = [];
        const k = 2 / (this.period + 1);
        
        if (prices.length === 0) return ema;

        // Calculate the first EMA value as a simple average
        const initialEma = prices.slice(0, this.period).reduce((acc, price) => acc + price, 0) / this.period;
        ema.push(initialEma);

        // Calculate subsequent EMA values
        for (let i = this.period; i < prices.length; i++) {
            const currentEma = (prices[i] - ema[ema.length - 1]) * k + ema[ema.length - 1];
            ema.push(currentEma);
        }

        return ema;
    }
}

export default EMA;