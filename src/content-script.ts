const mainJS = chrome.extension.getURL("main.js");
const script = document.createElement("script");
script.setAttribute("type", "module");
script.setAttribute("src", chrome.extension.getURL("main.js"));

// script.textContent = code;
// spotify ad detection
// data-testadtype='ad-type-none'
// data-testadtype="ad-type-ad"

(document.head || document.documentElement).appendChild(script);
script.remove();
