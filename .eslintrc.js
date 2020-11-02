module.exports = {
  env: {
    browser: true,
    node: true,
    chai: true,
    mocha: true,
  },
  plugins: ["wdio"],
  extends: ["plugin:wdio/recommended", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
