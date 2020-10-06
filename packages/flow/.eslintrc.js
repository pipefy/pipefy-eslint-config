module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:jest/recommended",
    "plugin:flowtype/recommended",
  ],
  plugins: [
    "flowtype",
    "jest",
    "react",
    "react-hooks",
    "import",
    "prettier",
    "jsx-a11y",
  ],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    jquery: true,
    jest: true,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
