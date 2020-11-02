module.exports = {
  randomEmailGenerator() {
    const randomEmail = require("random-email");
    randomEmail({ domain: "me.com" });
  },
};
