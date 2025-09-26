import React from 'react';
import { Trade } from '../../types';

const TradeTable: React.FC<{ trades: Trade[] }> = ({ trades }) => {
    return (
        <table className="trade-table admin-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Pair</th>
                    <th>Status</th>
                    <th>Entry Price</th>
                    <th>Stop Loss</th>
                    <th>Take Profit</th>
                    <th>Trade Size</th>
                </tr>
            </thead>
            <tbody>
                {trades.map(trade => (
                    <tr key={trade.id}>
                        <td>{trade.id}</td>
                        <td>{trade.pair}</td>
                        <td>{trade.status}</td>
                        <td>{trade.entryPrice}</td>
                        <td>{trade.stopLoss}</td>
                        <td>{trade.takeProfit}</td>
                        <td>{trade.size}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TradeTable;
