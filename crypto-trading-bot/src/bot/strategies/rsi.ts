export class RSI {
    private period: number;

    constructor(period: number = 14) {
        this.period = period;
    }

    calculate(prices: number[]): number {
        if (prices.length < this.period) {
            throw new Error("Not enough data to calculate RSI");
        }

        const gains: number[] = [];
        const losses: number[] = [];

        for (let i = 1; i < prices.length; i++) {
            const change = prices[i] - prices[i - 1];
            if (change > 0) {
                gains.push(change);
                losses.push(0);
            } else {
                losses.push(-change);
                gains.push(0);
            }
        }

        const averageGain = this.average(gains.slice(-this.period));
        const averageLoss = this.average(losses.slice(-this.period));

        if (averageLoss === 0) {
            return 100; // RSI is 100 if there are no losses
        }

        const rs = averageGain / averageLoss;
        return 100 - (100 / (1 + rs));
    }

    private average(data: number[]): number {
        const sum = data.reduce((acc, val) => acc + val, 0);
        return sum / data.length;
    }
}