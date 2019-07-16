
/**
 * import Browser from 'Lib/Browswer'
 * Browser.name === 'Internet Explorer'
 * Browser.version === '8.0'
 */


import Bowser from "bowser";

let browser = Bowser.getParser(window.navigator.userAgent);

export default browser.getBrowser();

