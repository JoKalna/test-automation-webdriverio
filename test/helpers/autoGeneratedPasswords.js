module.exports = {
  randomPasswordGenerator() {
    const generator = require("generate-password");
    const password = generator.generate({
      length: 8,
      numbers: true,
      strict: true,
    });
    return { password };
  },
};
