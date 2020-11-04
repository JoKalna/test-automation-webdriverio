module.exports = {
  verifyMyAccount() {
    const signOut = $(
      '//div[@class="header_user_info"]/a[@class="logout"]'
    ).getText();
    expect(signOut).to.equal("Sign out");
  },
};
