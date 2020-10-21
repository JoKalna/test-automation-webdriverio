describe('Click contact form', () => {
  it('This will click a button', () =>  {
    browser.url('http://automationpractice.com/index.php');
    const footerButton = $(`#contact-link`);
    footerButton.click()
    browser.pause(5000);
  });
});