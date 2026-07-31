let browser = 'chrome';
switch (browser) {
    case "chrome":
    case "edge":
    case "firefox":
        console.log("chromium project");
        break;
    case "safari":
        console.log("apple project");
        break;  
    default:
        console.log("unknown project");
}