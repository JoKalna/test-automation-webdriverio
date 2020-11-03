const randomEmailGenerator = require("./randomEmailGenerator");

module.exports = {
  createAnAccount() {
    this.clickSignIn();
    const enterEmailAddress = this.enterEmailAddress();
    this.createAccountBtn();
    this.titleSelection();
    this.enterFirstName();
    this.enterLastName();
    this.validateEmailField(enterEmailAddress);
  },
  /** CLICK SIGN IN LINK TO REGISTER AND CREATE AN ACCOUNT */
  clickSignIn() {
    const clickSignIn = $(
      '//div[@class="nav"]//div[@class="header_user_info"]/a'
    );
    clickSignIn.click();
  },
  enterEmailAddress() {
    const randomEmailAddress = randomEmailGenerator.randomEmailGenerator();
    const emailAddressField = $('[id="email_create"]');
    emailAddressField.setValue(randomEmailAddress);
    browser.pause(2000);
    console.log("WHATS INSIDE randomEmailAddress", randomEmailAddress);
    return randomEmailAddress;
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
  validateEmailField(returnEmailAddres) {
    const validateEmail = $('[id="email"]');
    const attr = validateEmail.getAttribute("value");
    console.log("WHATS INSIDE attr : ", attr);
    expect(returnEmailAddres).to.equal(attr);
  },
};
