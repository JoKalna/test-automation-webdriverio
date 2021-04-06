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
  it.skip("Sort Z-A", function () {
    scenarios.sort({
      url: "/inventory.html",
      // sortBy key needs to match scenario line 17 e.g data[sortBy]
      sortBy: "za",
    });
  });
  it("Add to basket", function () {
    scenarios.atb({
      url: "/inventory.html",
    });
    browser.pause(5000);
  });
});
