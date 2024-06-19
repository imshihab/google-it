document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "g") {
        const selectedText = window.getSelection().toString().trim();
        if (selectedText) {
            chrome.runtime.sendMessage({
                action: "search",
                text: selectedText,
            });
        }
    }
});
