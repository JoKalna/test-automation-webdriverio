module.exports = {
  signOut() {
    const signOut = $(
      '//div[@class="header_user_info"]/a[@class="logout"]'
    ).click();
  },
};
