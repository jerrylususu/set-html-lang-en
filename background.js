function listener(info, tab) {
    chrome.scripting.executeScript({
      func: () => {document.documentElement.lang = "en"},
      target: {tabId: tab.id}
    });
  }
  
  chrome.contextMenus.create(
    {
      id: "set-html-lang-to-en",
      title: "Set html lang to en",
      contexts: ["page"]
    }
  );
  
  chrome.contextMenus.onClicked.addListener(listener);