var headerCSS = "#reader_header { background-color: #333333 !important; }";
var footerCSS = "#reader_wrapper.not-mobile, #reader_bottom_container { background-color: #333333 !important; }";

function logError(error) {
  console.log(`Error: ${error}`);
}

function hideBorders() {
  var changeHeaderPromise = browser.tabs.insertCSS({code: headerCSS});
  changeHeaderPromise.then(null, logError);
  var changeFooterPromise = browser.tabs.insertCSS({code: footerCSS});
  changeFooterPromise.then(null, logError);
}

browser.browserAction.onClicked.addListener(hideBorders);