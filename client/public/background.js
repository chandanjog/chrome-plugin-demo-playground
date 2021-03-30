/* global chrome */
let color = '#3aa757';

chrome.runtime.onInstalled.addListener((tab) => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
//  chrome.tabs.sendMessage(tab.id, { message: 'load' });
});