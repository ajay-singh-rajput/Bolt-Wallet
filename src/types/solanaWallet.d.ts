import { Transaction } from '@solana/web3.js';

interface SolanaWallet {
  connect(): Promise<string>; // Returns the connected wallet's public key
  disconnect(): Promise<void>; // Optionally handle wallet disconnection
  signTransaction(transaction: Transaction): Promise<Transaction>; // Signs a transaction
  signAndSendTransaction(transaction: Transaction): Promise<string>; // Signs and sends a transaction
}

declare global {
  interface Window {
    solanaWallet?: SolanaWallet;
  }
}
