module.exports = {
  parser: "babel-eslint",
  extends: ["plugin:testing-library/react"],
  plugins: ["react", "jest", "import", "prettier"],
  rules: {
    // Prevent usage of UNSAFE_ methods
    // https://github.com/yannickcr/eslint-plugin-react/blob/157cc932be2cfaa56b3f5b45df6f6d4322a2f660/docs/rules/no-unsafe.md
    "react/no-unsafe": [2, { checkAliases: true }],
  },
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
    "jest/globals": true,
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
    react: {
      version: "detect",
    },
  },
};
