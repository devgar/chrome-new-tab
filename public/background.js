chrome.runtime.onInstalled.addListener(() => {
  alert('Installed. Good Job!');
});

chrome.tabs.onCreated.addListener( () => {
  console.log('Tab created')
});