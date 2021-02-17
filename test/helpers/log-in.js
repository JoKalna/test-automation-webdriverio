module.exports = {
  logInAndVerify() {
    this.logIntoAccountUserName();
    this.logIntoAccountPassword();
    this.signIn();
    this.verifyLogInPage();
  },

  logIntoAccountUserName() {
    const userName = $("#user-name");
    userName.setValue("standard_user");
  },
  logIntoAccountPassword() {
    const password = $("#password");
    password.setValue("secret_sauce");
  },

  signIn() {
    const signInButton = $("#login-button");
    signInButton.click();
  },
  verifyLogInPage() {
    const productTitle = $("#inventory_filter_container > div").getText();
    expect(productTitle).to.equal("Products");
  },
};
