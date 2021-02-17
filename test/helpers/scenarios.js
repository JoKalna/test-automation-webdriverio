const logIn = require("./log-in");

module.exports = {
  logIn(data) {
    browser.url(data["url"]);
    logIn.logInAndVerify();
    browser.pause(5000);
  },
};
