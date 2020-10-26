const contactUsForm = require("../../test/helpers/contactUsForm");
const searchTerm = require("../../test/helpers/searchTerm");
describe("Click contact us and fill out the form", () => {
  it.skip("Fill out contact us form", () => {
    browser.url("/index.php");
    contactUsForm.fillContactUsFormandVerify();
  });
});

describe("Search for dress and add to basket", () => {
  it("Search for dress and add to basket to verify", () => {
    browser.url("/index.php");
    searchTerm.searchTermAndVerify("dress");

    //add to basket on PDP

    //on the form click on 'proceed to checkout'

    //click in SHOPPING-CART SUMMARY
  });
});
