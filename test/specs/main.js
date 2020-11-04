const contactUsForm = require("../../test/helpers/contactUsForm");
const searchTerm = require("../../test/helpers/searchTerm");
const productGrid = require("../helpers/productGrid");
const quickView = require("../helpers/quickView");
const createAccount = require("../helpers/createAnAccount");
const myAccount = require("../helpers/myAccount");

describe("Click contact us and fill out the form", () => {
  it("Fill out contact us form", () => {
    browser.url("/index.php");
    contactUsForm.fillContactUsFormandVerify();
  });
});

describe("Search for dress and click on quick View", () => {
  it("Search for dress and click on the quick view", () => {
    browser.url("/index.php");
    searchTerm.searchTermAndVerify("dress");
    productGrid.clickQuickView();
  });

  describe("Register a new account", () => {
    it("will click sign in and create a new account", () => {
      browser.url("/index.php");
      createAccount.createAnAccount();
      myAccount.verifyMyAccountTitle();
    });
  });
});
