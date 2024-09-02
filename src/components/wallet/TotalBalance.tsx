import React from 'react'
import ArrowUpCircleIcon from '../icons/ArrowUpCircleIcon'
import AddIcon from '../icons/AddIcon'
import ExchangeIcon from '../icons/ExchangeIcon'
import StoreIcon from '../icons/StoreIcon'

const TotalBalance:React.FC = () => {
  return (
    <div className='w-full min-h-40 bg-gray-900 flex flex-col items-center justify-center'> 
    <p className='text-sm text-gray-500'>Total balance</p>
    <p className='text-gray-300 text-3xl'><span className='text-gray-500'>$</span>5.22</p>
    <div className='flex items-center justify-evenly w-full mt-5'>
        <div className='flex flex-col items-center justify-center'>
            <div className='w-6 text-gray-900 rounded-full bg-orange-400'>
                <ArrowUpCircleIcon/>
            </div>
            <span className='text-orange-400 text-xs'>
            Send
            </span>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='w-6 text-gray-900 rounded-full bg-orange-400'>
                <AddIcon/>
            </div>
            <span className='text-orange-400 text-xs'>
            Add Crypto
            </span>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='w-6 text-gray-900 rounded-full bg-orange-400'>
                <ExchangeIcon/>
            </div>
            <span className='text-orange-400 text-xs'>
            Exchange
            </span>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='w-6 text-gray-900 rounded-full bg-orange-400'>
                <StoreIcon/>
            </div>
            <span className='text-orange-400 text-xs'>
            P2P Market
            </span>
        </div>
    </div>
    </div>
  )
}

export default TotalBalance