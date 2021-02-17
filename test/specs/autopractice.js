const contactUsForm = require("../helpers/autopractice/contactUsForm");
const searchTerm = require("../helpers/autopractice/searchTerm");
const productGrid = require("../helpers/autopractice/productGrid");
const goToPdp = require("../helpers/autopractice/pdp");
const createAccount = require("../helpers/autopractice/createAnAccount");
const checkout = require("../helpers/autopractice/checkout");
const logIn = require("../helpers/autopractice/logIn");

describe("AUTOMATION PRACTICE WEBSITE - Click contact us and fill out the form", () => {
  it("Fill out contact us form", () => {
    browser.url("/index.php");
    contactUsForm.fillContactUsFormandVerify();
  });

  describe("Register a new account, log in and search for dress and add to basket", () => {
    it("register account, log in witht he same details and add to basket a dress", () => {
      browser.url("/index.php");
      const accountDetails = createAccount.createAccount();
      logIn.logIntoAccount(accountDetails);
      searchTerm.searchTermAndVerify("dress");
      productGrid.clickProduct();
      const pdpPrice = goToPdp.pdp();
      // checkout.shoppingChartSummary(pdpPrice);
    });
  });
});
