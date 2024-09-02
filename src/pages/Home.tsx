import React from 'react'
import { deletePrivateKey } from '../store/storage'
import { useAppSelector } from '../store/store'

const Home:React.FC = () => {

  const {privateKey} = useAppSelector(state => state.AuthSlice)

  
  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-2'>
      <p>{privateKey || 'No Privet key'}</p>
      <button className='w-full p-3 rounded-md bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all' onClick={deletePrivateKey}>Delete Account</button>
    </div>
  )
}

export default Home