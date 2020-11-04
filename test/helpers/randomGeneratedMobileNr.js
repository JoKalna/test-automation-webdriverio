module.exports = {
  randomMobileNumber() {
    const faker = require("faker");
    const randomPhoneNumber = faker.phone.phoneNumberFormat(6);
    return randomPhoneNumber;
  },
};
