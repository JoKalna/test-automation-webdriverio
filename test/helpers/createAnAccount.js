module.exports = {
  clickSignIn() {
    const clickSignIn = $(
      '//div[@class="nav"]//div[@class="header_user_info"]/a'
    );
    clickSignIn.click();
  },
};
