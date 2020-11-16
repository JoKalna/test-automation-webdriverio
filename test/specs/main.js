const contactUsForm = require("../../test/helpers/contactUsForm");
const searchTerm = require("../../test/helpers/searchTerm");
const productGrid = require("../helpers/productGrid");
const goToPdp = require("../helpers/pdp");
const createAccount = require("../helpers/createAnAccount");
const checkout = require("../helpers/checkout");
const logIn = require("../helpers/logIn");
describe("Click contact us and fill out the form", () => {
  it("Fill out contact us form", () => {
    browser.url("/index.php");
    contactUsForm.fillContactUsFormandVerify();
  });

  describe("Register a new account, log in and search for dress and add to basket", () => {
    it.only("register account, log in witht he same details and add to basket a dress", () => {
      browser.url("/index.php");
      //     const accountDetails = createAccount.createAccount();
      //    logIn.logIntoAccount(accountDetails);
      searchTerm.searchTermAndVerify("dress");
      productGrid.clickProduct();
      const pdpPrice = goToPdp.pdp();
      checkout.shoppingChartSummary(pdpPrice);
    });
  });
});
