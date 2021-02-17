module.exports = {
  logIn(data) {
    browser.url(data["url"]);
    browser.pause(5000);
  },
};
