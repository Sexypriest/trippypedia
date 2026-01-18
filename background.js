
chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("dailyReview", { periodInMinutes: 1440 });
});
