describe('Click contact form', () => {
  it('This will click a button', () =>  {
    browser.url('http://automationpractice.com/index.php');
    const contactUsLink = $(`#contact-link`);
    contactUsLink.click()
    browser.pause(5000);
  });
});