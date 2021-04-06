const logIn = require("./log-in");
const products = require("./grid");
const sortBy = require("./sort");
const atb = require("./atb");

module.exports = {
  logIn(data) {
    browser.url(data["url"]);
    logIn.logInAndVerify();
  },
  inventory(data) {
    browser.url(data["url"]);
    products.verifyProductTitle();
  },
  sort(data) {
    browser.url(data["url"]);
    sortBy.sortAndVerify(data["sortBy"]);
  },
  atb(data) {
    browser.url(data["url"]);
    browser.pause(5000);
    atb.atbAndVeryify();
  },
};
