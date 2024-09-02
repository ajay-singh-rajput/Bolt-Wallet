// src/slices/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { comparePasscode, hashPasscode } from '../../utils/cryptoUtils';

interface AuthState {
    isAuth: boolean;
    privateKey: string;
    publicKey: string;
    passCodeHash: string; 
    tryCount:number;
    passcode:string
}

const initialState: AuthState = {
    isAuth: false,
    privateKey: '',
    publicKey: '',
    passCodeHash: '',
    tryCount:0,
    passcode:''
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPassCode: (state, action: PayloadAction<string>) => {
            state.passCodeHash = hashPasscode(action.payload); 
            state.passcode = action.payload
        },
        setHashedPasscode :(state, action : PayloadAction<string>)=>{
            state.passCodeHash = action.payload
        },
        setPrivateKey: (state, action: PayloadAction<string>) => {
            state.privateKey = action.payload; 
        },
        setPublicKey: (state, action: PayloadAction<string>) => {
            state.publicKey = action.payload;
        },
        authenticate: (state, action: PayloadAction<string>) => {
            const inputPassCode = action.payload;
            state.tryCount++
            state.isAuth = comparePasscode(inputPassCode, state.passCodeHash);
            if (state.isAuth) {
                state.passcode =inputPassCode;
            } 
        },
    },
});

export const { setPassCode, setPrivateKey, setPublicKey, authenticate, setHashedPasscode } = authSlice.actions;

export default authSlice.reducer;
