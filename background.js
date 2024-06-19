chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "search") {
        const query = encodeURIComponent(request.text);
        const url = `https://www.google.com/search?q=${query}`;
        chrome.tabs.create({ url: url });
    }
});
