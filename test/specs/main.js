const scenarios = require("../helpers/scenarios");

describe("Sauce lab - practice", function () {
  //retry the test if uncesseful. defined in wdio.conf.js
  this.retries(process.env.RETRIES);
  it("Log in page for Sauce lab", function () {
    scenarios.logIn({
      url: "",
    });
  });
  it.skip("Verify items on inventory page", function () {
    scenarios.inventory({
      url: "/inventory.html",
    });
  });
  it("Sort Z-A", function () {
    scenarios.sort({
      url: "/inventory.html",
      sortBy: "za",
    });
    browser.pause(5000);
  });
});
