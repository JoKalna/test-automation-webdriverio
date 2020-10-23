//const contactUsForm = require('./contactUsForm');
const contactUsForm = require('../../test/helpers/contactUsForm');

describe('Click contact form', () => {
  it('This will click a button', () =>  {
    browser.url('http://automationpractice.com/index.php');
    const contactUsLink = $(`#contact-link`);
    contactUsLink.click()
    contactUsForm.inputMessage();
    contactUsForm.subjectHeading();
  });
});