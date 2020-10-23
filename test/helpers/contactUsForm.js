module.exports = {
  //fill in the message box
  inputMessage(){
    const inputMessage = $('//div[@class="col-xs-12 col-md-9"]//div[@class="form-group"]/textarea');
    inputMessage.setValue('THIS IS A TEST');
    browser.pause(5000);

  },
  /** SEND MESSAGE BODY */

  //subject Heading
  subjectHeading(){
    const subjectHeading = $('[id="id_contact"]').selectByVisibleText("Customer service");
   // subjectHeading.click();
    browser.pause(10000);

  },


  //Email Address

  //Order Reference

  //Click send

};
