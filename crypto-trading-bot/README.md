# Crypto Trading Bot

## Overview
The Crypto Trading Bot is a trading application designed to automate spot trading on cryptocurrency exchanges such as Binance, with the flexibility to integrate additional exchanges like KuCoin and Coinbase in the future. The bot utilizes technical analysis strategies and machine learning to adapt to live market conditions.

## Features
- Connects to Binance for spot trading (with future support for KuCoin and Coinbase).
- Supports trading on all available pairs on the exchange.
- Key trading features include:
  - Stop-loss percentage
  - Take-profit percentage
  - Trade size control
  - Number of trades limit
- Executes trades automatically based on technical analysis strategies (EMA, RSI, MACD).
- Incorporates a machine learning layer to adapt strategies to live market conditions.
- Sends notifications via Telegram when trades are executed.
- Provides a multilingual dashboard (English and Arabic) to monitor performance and settings.
- Built to scale for multi-user access in the future.

## Project Structure
```
crypto-trading-bot
├── src
│   ├── bot
│   │   ├── index.ts
│   │   ├── strategies
│   │   │   ├── ema.ts
│   │   │   ├── rsi.ts
│   │   │   └── macd.ts
│   │   ├── machine-learning
│   │   │   └── index.ts
│   │   ├── notifications
│   │   │   └── telegram.ts
│   │   ├── exchange
│   │   │   ├── binance.ts
│   │   │   ├── kucoin.ts
│   │   │   └── coinbase.ts
│   │   └── trade-manager.ts
│   ├── dashboard
│   │   ├── index.tsx
│   │   ├── components
│   │   │   └── TradeTable.tsx
│   │   ├── locales
│   │   │   ├── en.json
│   │   │   └── ar.json
│   │   └── styles
│   │       └── dashboard.css
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd crypto-trading-bot
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Configure your API keys for the exchanges in the appropriate files.
5. Start the bot:
   ```
   npm start
   ```

## Usage Guidelines
- Ensure you have valid API keys for the exchanges you wish to trade on.
- Adjust the trading parameters (stop-loss, take-profit, trade size, etc.) in the configuration files as needed.
- Monitor the performance and trades through the dashboard.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.