import { readable } from 'svelte/store';

const getTabs = (wId, cb) => chrome.tabs.query({windowId: wId}, cb)

const tabs = readable([], set => {
  chrome.windows.getCurrent(({ id }) => {
    getTabs(id, set)
    chrome.tabs.onCreated.addListener(_ => getTabs(id, set))
    chrome.tabs.onUpdated.addListener(_ => getTabs(id, set))
    chrome.tabs.onRemoved.addListener(_ => getTabs(id, set))
  })

	return () => /* DESTROY STORE */ null
});

export default tabs