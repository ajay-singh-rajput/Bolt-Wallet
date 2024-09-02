import { Dispatch } from "@reduxjs/toolkit";
import { setHashedPasscode } from "../slices/authSlice"
import { doesPrivetKey, getHashedPasscode } from "../storage"

export const getSavedHashedPasscode = ()=> async(dispatch:Dispatch)=>{
    const hashPasscode = await getHashedPasscode();
    const doesPrivetKeyAvailable = await doesPrivetKey()
    console.log(hashPasscode, doesPrivetKeyAvailable)
    // alert( doesPrivetKeyAvailable)
    // alert(hashPasscode)
    if (hashPasscode && doesPrivetKeyAvailable) {
        dispatch(setHashedPasscode(hashPasscode));
    }
};


