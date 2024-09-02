import React from 'react'
import Logo from '../components/Logo'
import { useNavigate } from 'react-router-dom'

const Auth:React.FC = () => {
  const navigate = useNavigate()

  const clickHandler = ()=>{
    navigate('/passcode')
  }
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className='w-full h-1/2 flex flex-col items-center justify-center'>
        <Logo cs={'w-48'} />
      </div>
        <div className='w-full h-1/2 flex flex-col items-center justify-between p-8'>
        <div className='text-center flex flex-col items-center justify-center'>

        <p className='text-2xl font-bold'>Bolt Wallet</p>
        <p className='text-gray-400 w-2/3'>Create a new wallet or add an existing one</p>
        </div>
        <div className='flex flex-col gap-3 py-3 w-full'>
          <button onClick={clickHandler} className='w-full p-3 rounded-md bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all'>Create New Wallet</button>
          <button className='w-full p-3 rounded-md bg-gray-800 hover:bg-gray-700 active:scale-95 transition-all'>Import Existing Wallet</button>
        </div>

        </div>
    </div>
  )
}

export default Auth