//const contactUsForm = require('./contactUsForm');
const contactUsForm = require('../../test/helpers/contactUsForm');

describe('Click and fill out contact form', () => {
  it('Test to fill out contact form', () =>  {
    browser.url('http://automationpractice.com/index.php');
    const contactUsLink = $(`#contact-link`);
    contactUsLink.click()
    contactUsForm.fillContactUsFormandVerify();
  });
});