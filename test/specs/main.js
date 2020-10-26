const contactUsForm = require("../../test/helpers/contactUsForm");

describe("Click contact us and fill out the form", () => {
  it.skip("Fill out contact us form", () => {
    browser.url("/index.php");
    contactUsForm.fillContactUsFormandVerify();
  });
});

describe("Search for dress and add to basket", () => {
  it("Search for dress and add to basket to verify", () => {
    browser.url("/index.php");
    //##### search
    const searchTerm = $(
      '//form[@id="searchbox"]/input[@class="search_query form-control ac_input"]'
    );
    searchTerm.setValue("dress");
    //##### click-product
    const clickSearch = $('//form[@id="searchbox"]/button');
    clickSearch.click();
    browser.pause(5000);
    //verify
    const searchTermMatch = $(
      '//div[@id="center_column"]/h1/span[@class="lighter"]'
    ).getText();
    console.log("WHATS INSIDE", searchTermMatch);
    expect(searchTermMatch).to.equal(`"DRESS"`);

    //add to basket on PDP

    //on the form click on 'proceed to checkout'

    //click in SHOPPING-CART SUMMARY
  });
});
