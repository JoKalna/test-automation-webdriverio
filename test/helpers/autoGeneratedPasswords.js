module.exports = {
  randomPasswordGenerator() {
    const generator = require("generate-password");
    const password = generator.generate({
      length: 10,
      numbers: true,
    });
    return { password };
  },
};
