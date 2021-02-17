const scenarios = require("../helpers/scenarios");

describe("Sauce lab - practice", function () {
  //retry the test if uncesseful. defined in wdio.conf.js
  this.retries(process.env.RETRIES);
  it("Log in page for Sauce lab", function () {
    scenarios.logIn({
      url: "",
    });
  });
});
