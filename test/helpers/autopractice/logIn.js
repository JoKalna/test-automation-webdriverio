const createAnAccount = require("./createAnAccount");
module.exports = {
  logIntoAccount(accountDetails) {
    this.logIn(accountDetails["createEmailAddress"]);
    this.logInPassword(accountDetails["pswLogIn"]);
    this.logInButton();
  },

  logIn(existingEmail) {
    const logInEmail = existingEmail;
    const emailField = $('[id="email"]');
    emailField.setValue(logInEmail);
  },

  logInPassword(existingPsw) {
    const loginPassword = existingPsw;
    const passwordField = $('[id="passwd"]');
    passwordField.setValue(loginPassword);
  },
  logInButton() {
    const logInBtn = $('[id="SubmitLogin"]');
    logInBtn.click();
  },
};
