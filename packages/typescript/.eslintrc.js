module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    "jest",
    "react",
    "import",
    "prettier",
    "@typescript-eslint/eslint-plugin",
  ],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  rules: {
    "react/no-unsafe": [2, { checkAliases: true }],
  },
};
