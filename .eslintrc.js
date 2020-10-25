module.exports = {
  env: {
    browser: true,
    es6: true,
    chai: true,
  },
  plugins: ["wdio"],
  extends: ["plugin:wdio/recommended", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {},
};
