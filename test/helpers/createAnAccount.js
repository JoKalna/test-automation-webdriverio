const randomEmailGenerator = require("./randomEmailGenerator");

module.exports = {
  createAnAccount() {
    this.clickSignIn();
    this.enterEmailAddress();
    this.createAccountBtn();
    this.titleSelection();
    this.enterFirstName();
    this.enterLastName();
  },
  /** CLICK SIGN IN SIGN TO REGISTER AND CREATE AN ACCOUNT */
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
  titleSelection() {
    const titleMrs = $('[id="id_gender2"]');
    titleMrs.click();
  },

  enterFirstName() {
    const firstName = $('[id="customer_firstname"]');
    firstName.setValue("Random");
  },
  enterLastName() {
    const lastName = $('[id="customer_lastname"]');
    lastName.setValue("Surname");
  },
};
