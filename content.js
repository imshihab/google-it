function isValidUrl(text) {
    try {
        // Check if URL constructor can parse it
        new URL(text);
        return true;
    } catch (err) {
        // If it fails, check if it's a valid domain/path without a scheme
        const urlPattern = /^(?:\w+\.\w{2,}(?:\/\S*)?)$/;
        return urlPattern.test(text);
    }
}

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "g") {
        event.preventDefault(); // Prevent the default "Find" action
        const selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            const action = isValidUrl(selectedText) ? "visit" : "search";
            chrome.runtime.sendMessage({ action, text: selectedText });
        }
    }
});
