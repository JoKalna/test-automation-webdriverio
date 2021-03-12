const logIn = require("./log-in");
const products = require("./grid");
const sortBy = require("./sort");

module.exports = {
  logIn(data) {
    browser.url(data["url"]);
    logIn.logInAndVerify();
    browser.pause(5000);
  },
  inventory(data) {
    browser.url(data["url"]);
    products.verifyProductTitle();
  },
  sort(data) {
    browser.url(data["url"]);
    sortBy.sortAndVerify(data["sortBy"]);
  },
};
