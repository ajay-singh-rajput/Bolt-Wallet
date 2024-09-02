import React from 'react'
import SettingIcon from '../components/icons/SettingIcon'
import ClipboardIcon from '../components/icons/ClipboardIcon'
import ArrowIconDown from '../components/icons/ArrowIconDown'
import AddIcon from '../components/icons/AddIcon'
import TotalBalance from '../components/wallet/TotalBalance'
import CryptoCoinList from '../components/wallet/CryptoList'

const WalletHome:React.FC = () => {
  return (
    <div className='w-full h-full p-2 flex flex-col gap-2'>
        <div className='w-full py-2 flex justify-between items-center'>
            <div className='w-6 cursor-pointer aspect-square text-gray-300 hover:text-orange-300 active:scale-95'><SettingIcon/></div>
            <div className='flex gap-1 items-center justify-between w-2/5 border rounded-lg bg-gray-900 p-1 border-gray-800 text-center'>
                <div className='w-5 text-gray-500'>
                    <ArrowIconDown/>
                </div>
                <div className='flex flex-col items-center justify-center border-x border-gray-800 px-2'>

                <p className=' font-semibold '>Wallet 1</p>
                <p className='text-xs text-gray-500'>ur5s...r8f4 </p>
                </div>
                <div className='w-5 text-gray-500'><ClipboardIcon/></div>
            </div>
            <div className='w-6 cursor-pointer aspect-square text-gray-300 hover:text-orange-300 active:scale-95'><AddIcon/></div>
            
        </div>
        <TotalBalance/>
        <CryptoCoinList/>

    </div>
  )
}

export default WalletHome