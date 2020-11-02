const randomEmailGenerator = require("./randomEmailGenerator");

module.exports = {
  createAnAccount() {
    this.clickSignIn();
    this.enterEmailAddress();
    this.createAccountBtn();
  },

  clickSignIn() {
    const clickSignIn = $(
      '//div[@class="nav"]//div[@class="header_user_info"]/a'
    );
    clickSignIn.click();
  },
  enterEmailAddress() {
    const randomEmailAddress = randomEmailGenerator.randomEmailGenerator();
    console.log("what email", randomEmailAddress);
    const emailAddressField = $('[id="email_create"]');
    emailAddressField.setValue(randomEmailAddress);
    browser.pause(2000);
  },

  createAccountBtn() {
    const createAccountBtn = $('[id="SubmitCreate"]');
    createAccountBtn.click();
  },
};
