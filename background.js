chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const { action, text } = request;
    if (action === "visit") {
        let formattedUrl;
        if (text.startsWith("https://") || text.startsWith("http://")) {
            formattedUrl = text;
        } else {
            formattedUrl = `https://${text}`;
        }
        chrome.tabs.create({ url: formattedUrl });
    } else if (action === "search") {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
            text
        )}`;
        chrome.tabs.create({ url: searchUrl });
    }
});
