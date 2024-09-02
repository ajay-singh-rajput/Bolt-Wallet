// src/utils/cryptoUtils.ts
import CryptoJS from 'crypto-js';
import { savePasscode } from '../store/storage';

// Hash passcode
export const hashPasscode = (passcode: string): string => {
    const hashedPasscode = CryptoJS.SHA256(passcode).toString(); // Use SHA-256 for hashing
    savePasscode(hashedPasscode); // Save hashed passcode
    return hashedPasscode;
};

// Compare passcode with hash
export const comparePasscode = (passcode: string, hash: string): boolean => {
    const passcodeHash = CryptoJS.SHA256(passcode).toString(); // Hash the passcode to compare
    return passcodeHash === hash;
};

// Derive a key from the passcode
// const deriveKeyFromPasscode = (passcode: string): any => {
//     return CryptoJS.PBKDF2(passcode + 'aa', 'SALT', {
//         keySize: 256 / 32, // 256-bit key
//         iterations: 1000
//     });
// };


// Encrypt data using the derived key
export const encryptData = (data: string, passcode: string): string => {
    // const key = deriveKeyFromPasscode(passcode);
    return CryptoJS.AES.encrypt(data, passcode).toString();
};

// Decrypt data using the derived key
export const decryptData = (encryptedData: string, passcode: string): string => {
    // const key = deriveKeyFromPasscode(passcode);
    const bytes = CryptoJS.AES.decrypt(encryptedData, passcode);
    return bytes.toString(CryptoJS.enc.Utf8);
};
