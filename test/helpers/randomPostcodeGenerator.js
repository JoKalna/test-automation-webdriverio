module.exports = {
  randomPostcodeGenerator() {
    const randomZip = require("random-zipcode");
    return randomZip();
  },
};
