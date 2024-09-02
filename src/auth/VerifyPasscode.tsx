import React, {  useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store';
import toast from 'react-hot-toast';
import { authenticate } from '../store/slices/authSlice';
import FaEyeSlash from '../components/icons/FaEyeSlash';
import FaEye from '../components/icons/FaEye';

const VerifyPasscode:React.FC = () => {
    const [Password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useAppDispatch();
    const {isAuth, tryCount} = useAppSelector(state => state.AuthSlice)

    const onSubmitHandler =async () => {
        const currentCount = tryCount
        if (Password.length < 8) {
            toast.error('Password should have at least 8 characters');
            return; 
        }
        dispatch(authenticate(Password));
        if (!isAuth && tryCount > currentCount) {
            toast.error('Incorrect Password');
         } 
        

    };
   
    

  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-3'>
    <div className='w-full flex flex-col items-center justify-center gap-4'>
        <p className='text-2xl font-semibold'>Verify Password</p>
        <p className='text-gray-500 text-center'>
            Input password to access.
        </p>
        <div className='w-full'>
            <label 
                htmlFor='password' 
                className='block text-gray-300 text-sm mb-2'
            >
                Password
            </label>
            <div className='relative'>
                <input
                    id='password'
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter your password'
                    maxLength={20}
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full p-2 border border-gray-800 outline outline-gray-700 bg-gray-900 rounded-md shadow-lg'
                    title='Password input'
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className='absolute inset-y-0 right-0 flex items-center pr-3'
                >
                    <span className='text-gray-500 active:text-gray-400 w-4 aspect-square text-sm'>

                    {showPassword ? <FaEyeSlash  /> : <FaEye  />}
                    </span>
                </button>
            </div>
        </div>
       
        <button
            onClick={onSubmitHandler}
            className='w-full p-3 rounded-md bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all'
        >
            Submit
        </button>
    </div>
</div>
  )
}

export default VerifyPasscode