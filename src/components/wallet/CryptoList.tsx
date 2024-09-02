import React from 'react';
import ArrowRightIcon from '../icons/ArrowRightIcon';

// Define the interface for the coin data
interface CryptoCoin {
    id: number;
    name: string;
    symbol: string;
    currentPrice: number; // Current price in USD
    amountOwned: number; // Amount of coins owned by the user
}

// Sample data
const cryptoCoins: CryptoCoin[] = [
    {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        currentPrice: 27100,
        amountOwned: 0.5,
    },
    {
        id: 2,
        name: 'Ethereum',
        symbol: 'ETH',
        currentPrice: 1680,
        amountOwned: 2.5,
    },
    {
        id: 3,
        name: 'Ripple',
        symbol: 'XRP',
        currentPrice: 0.5,
        amountOwned: 1000,
    },
    {
        id: 4,
        name: 'Bitcoin',
        symbol: 'BTC',
        currentPrice: 27100,
        amountOwned: 0.5,
    },
    {
        id: 5,
        name: 'Ethereum',
        symbol: 'ETH',
        currentPrice: 1680,
        amountOwned: 2.5,
    },
    {
        id: 6,
        name: 'Ripple',
        symbol: 'XRP',
        currentPrice: 0.5,
        amountOwned: 1000,
    },
    // Add more coins as needed
];

const CryptoCoinList: React.FC = () => {
    return (
        <div className="bg-custom-black w-full h-full overflow-auto py-4 pb-16">
            <h1 className="text-white  font-bold mb-4">Crypto Wallet</h1>
            <div className="space-y-2">
                {cryptoCoins.map(coin => (
                    <div 
                        key={coin.id} 
                        className="flex items-center justify-between p-4 bg-gray-900 rounded-lg shadow hover:bg-gray-800 transition duration-300"
                    >
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-orange-200 text-sm font-bold mr-3">
                                {coin.symbol}
                            </div>
                            <div>
                                <h2 className="text-white text-lg font-semibold">{coin.name}</h2>
                                <p className="text-gray-400 text-sm">{coin.symbol}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-white text-base font-medium">${coin.currentPrice.toFixed(2)}</p>
                            <p className="text-gray-500 text-sm">{coin.amountOwned.toFixed(2)} {coin.symbol}</p>
                        </div>
                        <div  className="text-gray-500 ml-4 w-5">

                        <ArrowRightIcon  />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CryptoCoinList;
