module.exports = {

  contactUsForm() {
    this.inputMessage();
    this.subjectHeading();
    this.inputEmailAddress();
    this.inputOrderReference();
    this.sendMessageAndVerify();
  },
  /** SEND MESSAGE BODY */
  inputMessage(){
    const inputMessage = $('//div[@class="col-xs-12 col-md-9"]//div[@class="form-group"]/textarea');
    inputMessage.setValue('THIS IS A TEST');
  },

  subjectHeading(){
    const subjectHeading = $('[id="id_contact"]').selectByVisibleText("Customer service");

  },
  inputEmailAddress(){
    const emailAddress = $('[id="email"]');
    emailAddress.setValue("test@test.com");
  },

  inputOrderReference() {
    const inputOrderReference = $('[id="id_order"]');
    inputOrderReference.setValue(123456789);
  },
  //Click send and verify the message
  sendMessageAndVerify(){
    const sendMessage = $('[id="submitMessage"]');
    sendMessage.click();
    const sucessAlert = $('//div[@class="row"]//div[@id="center_column"]/p[@class="alert alert-success"]').getText();
//    expect(sucessAlert).to.be.a('Your message has been successfully sent to our team.');
  },
};
