// src/storage.ts
import { decryptData, encryptData } from "../utils/cryptoUtils";

// Save encrypted private key to chrome.storage
export const savePrivateKey = async (key: string, passcode: string) => {
    const encryptedKey = encryptData(key, passcode);
    await chrome.storage.local.set({ encryptedPrivateKey: encryptedKey });
};

// Load and decrypt private key from chrome.storage
export const loadPrivateKey = async (passcode: string) => {
    const result = await chrome.storage.local.get(['encryptedPrivateKey']);
    const encryptedKey = result.encryptedPrivateKey;
    return encryptedKey ? decryptData(encryptedKey, passcode) : '';
};

export const doesPrivetKey = async ()=>{
    const result = await chrome.storage.local.get(['encryptedPrivateKey']);
    const encryptedKey = result.encryptedPrivateKey;
    return encryptedKey
}

export const savePasscode = async(hashedPasscode:string)=>{
    await chrome.storage.local.set({hashedPasscode:hashedPasscode})
}

export const getHashedPasscode = async()=>{
    const hashedPasscode =  await chrome.storage.local.get(['hashedPasscode']);
    return hashedPasscode ? hashedPasscode.hashedPasscode : ''
}

// Delete private key from chrome.storage
export const deletePrivateKey = async () => {
    await chrome.storage.local.remove(['encryptedPrivateKey']);
}