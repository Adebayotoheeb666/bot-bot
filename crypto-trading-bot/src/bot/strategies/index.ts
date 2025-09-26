import { Strategy } from './Strategy';
import { EMAStrategy, RSIStrategy, MACDStrategy } from './technical';

export class StrategyManager {
    private strategies: Strategy[] = [];

    constructor() {
        // Add default strategies
        this.strategies.push(new EMAStrategy());
        this.strategies.push(new RSIStrategy());
        this.strategies.push(new MACDStrategy());
    }

    public addStrategy(strategy: Strategy) {
        this.strategies.push(strategy);
    }

    public getSignals(data: any): { [key: string]: 'BUY' | 'SELL' | 'HOLD' } {
        const signals: { [key: string]: 'BUY' | 'SELL' | 'HOLD' } = {};
        for (const strategy of this.strategies) {
            signals[strategy.name] = strategy.generateSignal(data);
        }
        return signals;
    }
}
