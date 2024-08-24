import React from 'react';

function OpenTrades() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Open Trades</h2>
      <div className="mt-4">
        <div className="flex justify-between mb-4">
          <div>GBP/USD</div>
          <div className="text-green-500">+56.00 USD</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>USD/JPY</div>
          <div className="text-red-500">-0.09 USD</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>EUR/USD</div>
          <div className="text-red-500">-1.09 USD</div>
        </div>
      </div>
    </div>
  );
}

export default OpenTrades;
