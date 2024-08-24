import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline'; // Example icon for link

function TradingAccounts() {
  const accounts = [
    { accountType: 'Master Account', platform: 'CTrader', accountNumber: '#273728', balance: '0.00 USD' },
    { accountType: 'Master Account', platform: 'CTrader', accountNumber: '#273729', balance: '0.00 USD' },
    // Add more accounts as needed
  ];

  return (
    <div className="bg-white p-6  rounded-sm shadow-lg">
      <h2 className="text-lg font-semibold mb-4">Trading Accounts</h2>
      <div className="space-y-4">
        {accounts.map((account, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div>
                <div className="text-sm text-gray-500">{account.accountType}</div>
                <div className="text-sm text-gray-500">{account.platform} {account.accountNumber}</div>
              </div>
              <ArrowRightIcon className="h-5 w-5 text-gray-500" />
            </div>
            <div className="text-2xl font-bold">{account.balance}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TradingAccounts;
