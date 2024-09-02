// background.js

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed');
  });
  
  // Example of a message listener
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received:', message);
    sendResponse({ status: 'success' });
  });
  