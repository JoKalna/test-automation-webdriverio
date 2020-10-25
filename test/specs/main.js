const contactUsForm = require("../../test/helpers/contactUsForm");

describe("Click contact us and fill out the form", () => {
  it("Fill out contact us form", () => {
    browser.url("http://automationpractice.com/index.php");
    contactUsForm.fillContactUsFormandVerify();
  });
});
