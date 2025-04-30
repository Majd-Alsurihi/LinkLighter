// Track state globally
let isHighlighting = false;

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["toggleHighlight.js"]
  });

  // Toggle icon depending on state
  isHighlighting = !isHighlighting;

  const path = isHighlighting
    ? {
        16: "icons/icon16_active.png",
        32: "icons/icon32_active.png",
        48: "icons/icon48_active.png",
        128: "icons/icon128_active.png"
      }
    : {
        16: "icons/icon16.png",
        32: "icons/icon32.png",
        48: "icons/icon48.png",
        128: "icons/icon128.png"
      };

  chrome.action.setIcon({ path });
});
