import { Connection, Transaction } from '@solana/web3.js';

// Solana connection URL
const SOLANA_CONNECTION_URL = 'https://api.mainnet-beta.solana.com';

// Create a connection instance
const connection = new Connection(SOLANA_CONNECTION_URL, 'confirmed');

// Simulate wallet functionality
const solanaWallet = {
  // Simulate connection logic
  connect: async function() {
    // You may replace this with actual logic to connect to a wallet
    // For example, using a library or an injected wallet provider
    return 'public-key'; // Mock public key
  },
  // Simulate disconnection logic
  disconnect: async function() {
    // Replace with actual disconnection logic
    // For example, clear session or notify the wallet provider
  },
  // Simulate signing a transaction
  signTransaction: async function(transaction: Transaction) {
    // Replace with actual signing logic
    // For example, use wallet API to sign the transaction
    return transaction; // Mock signed transaction
  },
  // Simulate signing and sending a transaction
  signAndSendTransaction: async function(transaction: Transaction) {
    // Replace with actual signing and sending logic
    // For example, use wallet API to sign and send the transaction
    const signature = await connection.sendTransaction(transaction, []);
    return signature; // Mock transaction signature
  }
};

// Listen for messages from other parts of the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  (async () => {
    console.log(sender)
    try {
      switch (message.action) {
        case 'connect':
          const publicKey = await solanaWallet.connect();
          sendResponse({ publicKey });
          break;

        case 'disconnect':
          await solanaWallet.disconnect();
          sendResponse({ success: true });
          break;

        case 'signTransaction':
          if (message.transaction) {
            const transaction = Transaction.from(new Uint8Array(message.transaction));
            const signedTransaction = await solanaWallet.signTransaction(transaction);
            sendResponse({ signedTransaction: signedTransaction.serialize() });
          } else {
            sendResponse({ error: 'No transaction provided' });
          }
          break;

        case 'signAndSendTransaction':
          if (message.transaction) {
            const transaction = Transaction.from(new Uint8Array(message.transaction));
            const signature = await solanaWallet.signAndSendTransaction(transaction);
            sendResponse({ signature });
          } else {
            sendResponse({ error: 'No transaction provided' });
          }
          break;

        default:
          sendResponse({ error: 'Unknown action' });
          break;
      }
    } catch (error:any) {
      sendResponse({ error: error.message });
    }
  })();
  return true; // Indicates that the response is asynchronous
});
