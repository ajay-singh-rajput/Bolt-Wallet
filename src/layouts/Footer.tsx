import React from 'react'
import HomeIcon from '../components/icons/HomeIcon'
import MarketIcon from '../components/icons/MarketIcon'
import HistoryIcon from '../components/icons/HistoryIcon'
import BoxIcon from '../components/icons/BoxIcon'
import { Link, useLocation } from 'react-router-dom'

const Footer:React.FC = () => {
  
  const location = useLocation()

  
  return (
    <div className='w-full grid grid-flow-col grid-cols-4 absolute bottom-0 left-0 p-2 gap-2 justify-between bg-gray-900'>
        <div className={`flex flex-col items-center justify-center p-2 border-r border-gray-700  ${location.pathname === '/home' ? 'text-orange-400':'text-gray-400'}`}>
          <Link to={'/home'} className='w-5 aspect-square  border-gray-800'>
            <HomeIcon/>
          </Link>
          <span className='text-xs '>Home</span>
        </div>
        <div className={`flex flex-col items-center justify-center p-2 border-r border-gray-700  ${location.pathname === '/market' ? 'text-orange-400':'text-gray-400'}`}>
          <div className='w-5 aspect-square  border-gray-800 '>
            <MarketIcon/>
          </div>
          <span className='text-xs '>Market</span>
        </div>
        <div className={`flex flex-col items-center justify-center p-2 border-r border-gray-700  ${location.pathname === '/history' ? 'text-orange-400':'text-gray-400'}`}>
          <div className='w-5 aspect-square  border-gray-800 '>
            <HistoryIcon/>
          </div>
          <span className='text-xs '>History</span>
        </div>
        <div className={`flex flex-col items-center justify-center p-2  ${location.pathname === '/airdrop-list' ? 'text-orange-400':'text-gray-400'}`}>
          <Link to={'/airdrop-list'} className='w-5 aspect-square  border-gray-800 '>
            <BoxIcon/>
          </Link>
          <span className='text-xs '>Airdrop</span>
        </div>
    </div>
  )
}

export default Footer