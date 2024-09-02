import React from 'react';
import CheckCircle from '../components/icons/CheckCircle';

interface Airdrop {
    id: number;
    name: string;
    description: string;
    date: string;
    startDate: string;
    expireDate: string;
    blockchain: string;
    imageUrl: string;
    verified: boolean;
}

const airdrops: Airdrop[] = [
    {
        id: 1,
        name: 'Airdrop 1',
        description: 'Description of Airdrop 1',
        date: '2024-09-01',
        startDate: '2024-08-01',
        expireDate: '2024-09-15',
        blockchain: 'TON',
        imageUrl: 'https://public.bnbstatic.com/image/pgc/202406/b0579cea0e233e04af1422f46ca75e65.png',
        verified: true,
    },
    {
        id: 2,
        name: 'Airdrop 2',
        description: 'Description of Airdrop 2',
        date: '2024-09-02',
        startDate: '2024-08-05',
        expireDate: '2024-09-20',
        blockchain: 'Binance Smart Chain',
        imageUrl: 'https://stormgain.com/sites/default/files/2024-08/dogs-price-main_0.jpg',
        verified: false,
    },
    // Add more airdrops as needed
];

const AirdropDetails: React.FC = () => {
    return (
        <div className="bg-gray-900 w-full max-w-md h-[600px] overflow-auto p-6 rounded-lg shadow-lg">
            <h1 className="text-orange-500 text-2xl font-extrabold mb-6 text-center">Airdrop Details</h1>
            <div className="space-y-6">
                {airdrops.map(airdrop => (
                    <div key={airdrop.id} className="flex bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className='flex flex-col gap-1 items-center justify-center mr-4'>

                        <img src={airdrop.imageUrl} alt={airdrop.name} className="w-20 h-20 object-cover rounded-lg " />
                        <div className={`p-1 px-2 w-fit rounded-full border text-xs ${airdrop.verified ? 'text-green-500 border-green-500' : 'text-gray-500 border-gray-500'}`}>
                                   {airdrop.verified ? ' verified' : 'Not-verified'}
                                </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                                <h2 className="text-white text-xl font-semibold">{airdrop.name}</h2>
                                
                            </div>
                            <p className="text-gray-400 text-sm mb-3">{airdrop.description}</p>
                            <div className="text-gray-500 text-xs space-y-1">
                                <p><strong>Start Date:</strong> {airdrop.startDate}</p>
                                <p><strong>Expire Date:</strong> {airdrop.expireDate}</p>
                                <p><strong>Blockchain:</strong> {airdrop.blockchain}</p>
                                <p><strong>Date:</strong> {airdrop.date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AirdropDetails;
