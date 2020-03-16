const path = require("path");
const root = __dirname;

module.exports = {
  root: true,
  extends: "airbnb-base",
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: path.resolve(root, "config/webpack.base.js")
      }
    }
  },
  rules: {
    indent: 2
  }
};
