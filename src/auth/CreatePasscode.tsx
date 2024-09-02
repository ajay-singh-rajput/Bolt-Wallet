import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/store';
import { setPassCode } from '../store/slices/authSlice';
import FaEye from '../components/icons/FaEye';
import FaEyeSlash from '../components/icons/FaEyeSlash';

const CreatePasscode: React.FC = () => {
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onSubmitHandler = () => {
        if (Password.length < 8) {
            toast.error('Password should have at least 8 characters');
            return; 
        }

        if (Password !== ConfirmPassword) {
            toast.error('Passwords do not match');
            return;
        }
        dispatch(setPassCode(Password));

        navigate('/new-phrase');
    };

    

    

    return (
        <div className='w-full h-full flex flex-col items-center justify-center p-3'>
            <div className='w-full flex flex-col items-center justify-center gap-4'>
                <p className='text-2xl font-semibold'>Create Password</p>
                <p className='text-gray-500 text-center'>
                    It should have at least 8 characters. <br />
                    You’ll need this to unlock Backpack.
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
                <div className='w-full'>
                    <label 
                        htmlFor='confirm-password' 
                        className='block text-gray-300 text-sm mb-2'
                    >
                        Confirm Password
                    </label>
                    <input
                        id='confirm-password'
                        type={showPassword ? "text" : "password"}
                        placeholder='Confirm your password'
                        maxLength={20}
                        value={ConfirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className='w-full p-2 border border-gray-800 outline outline-gray-700 bg-gray-900 rounded-md shadow-lg'
                        title='Confirm Password input'
                    />
                </div>
                <button
                    onClick={onSubmitHandler}
                    className='w-full p-3 rounded-md bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all'
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default CreatePasscode;
