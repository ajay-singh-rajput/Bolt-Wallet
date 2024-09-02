import React, { useState } from 'react';
import { Transaction, SystemProgram, PublicKey } from '@solana/web3.js';

const SolanaWallet: React.FC = () => {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [transactionSignature, setTransactionSignature] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendMessageToBackground = (message: any) => {
    return new Promise((resolve, reject) => {
      chrome.runtime.sendMessage(message, response => {
        if (chrome.runtime.lastError || response.error) {
          reject(chrome.runtime.lastError || response.error);
        } else {
          resolve(response);
        }
      });
    });
  };

  const connectToWallet = async () => {
    try {
      const response: any = await sendMessageToBackground({ action: 'connect' });
      if (response.publicKey) {
        setPublicKey(response.publicKey);
      } else {
        setError(`Connection error: ${response.error}`);
      }
    } catch (error:any) {
      setError(`Connection error: ${error.message}`);
    }
  };

  const sendTransaction = async () => {
    try {
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: new PublicKey('sender-public-key'), // Replace with sender's public key
          toPubkey: new PublicKey('recipient-public-key'), // Replace with recipient's public key
          lamports: 1000, // Amount to send
        })
      );

      const response: any = await sendMessageToBackground({ action: 'signAndSendTransaction', transaction });
      if (response.signature) {
        setTransactionSignature(response.signature);
        await checkTransactionStatus(response.signature);
      } else {
        setError(`Transaction error: ${response.error}`);
      }
    } catch (error:any) {
      setError(`Transaction error: ${error.message}`);
    }
  };

  const checkTransactionStatus = async (signature: string) => {
    // Implement status check if needed
    setStatus(`Transaction signature: ${signature}`);
  };

  return (
    <div>
      <button onClick={connectToWallet}>Connect to Solana Wallet</button>
      {publicKey && <p>Connected Public Key: {publicKey}</p>}
      <button onClick={sendTransaction}>Send Transaction</button>
      {transactionSignature && <p>Transaction Signature: {transactionSignature}</p>}
      {status && <p>Status: {status}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default SolanaWallet;
