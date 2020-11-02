module.exports = {
  randomEmailGenerator() {
    const randomEmail = require("random-email");
    return randomEmail({ domain: "me.com" });
  },
};
