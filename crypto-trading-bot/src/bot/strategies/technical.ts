import { Strategy } from './Strategy';

export class EMAStrategy implements Strategy {
    name = 'EMA';
    generateSignal(data: any): 'BUY' | 'SELL' | 'HOLD' {
        // Example: data should contain closing prices
        // TODO: Implement EMA calculation
        // Return 'BUY', 'SELL', or 'HOLD' based on EMA logic
        return 'HOLD';
    }
}

export class RSIStrategy implements Strategy {
    name = 'RSI';
    generateSignal(data: any): 'BUY' | 'SELL' | 'HOLD' {
        // TODO: Implement RSI calculation
        return 'HOLD';
    }
}

export class MACDStrategy implements Strategy {
    name = 'MACD';
    generateSignal(data: any): 'BUY' | 'SELL' | 'HOLD' {
        // TODO: Implement MACD calculation
        return 'HOLD';
    }
}
