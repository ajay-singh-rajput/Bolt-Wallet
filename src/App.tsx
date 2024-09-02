import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import withAuth from './hoc/withAuth'
import CreatePasscode from './auth/CreatePasscode'
import PhrasePage from './pages/PhrasePage'
import { getSavedHashedPasscode } from './store/action/authAction'
import { useAppDispatch, useAppSelector } from './store/store'
import { loadPrivateKey } from './store/storage'
import { setPrivateKey } from './store/slices/authSlice'
import WalletHome from './pages/WalletHome'
import Footer from './layouts/Footer'
import AirdropDetails from './pages/AirdropList'

const App:React.FC = () => {

  const dispatch = useAppDispatch();
  const { isAuth, passcode} = useAppSelector(state => state.AuthSlice)

  useEffect(() => {
    dispatch(getSavedHashedPasscode())
  }, [])
  useEffect(() => {
    const updateLogin=async()=>{
      if (isAuth) {
          const privateKey = await loadPrivateKey(passcode)
          dispatch(setPrivateKey(privateKey))
  
        }
  }
  updateLogin()
  
    
  }, [ isAuth, passcode])
  

  const AuthHome = withAuth(WalletHome)
  
  return (
    <div className='w-[375px] h-[600px] bg-black text-white flex flex-col relative'>
      <Routes>
        <Route path='/' element={<AuthHome />} />
        <Route path='/passcode' element={<CreatePasscode/>} />
        <Route path='/new-phrase' element={<PhrasePage/>} />
        {/* <Route path='/home' element={<AuthHome/>} /> */}
        <Route path='/home' element={<WalletHome/>}/>
        <Route path='/airdrop-list' element={<AirdropDetails/>} />
      </Routes>
      <>
      </>
      {true && <Footer/>}
      
    </div>
  )
}

export default App