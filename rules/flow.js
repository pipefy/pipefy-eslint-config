module.exports = {
  extends: ["plugin:flowtype/recommended"],
  plugins: ["flowtype"],
  rules: {
    // Disallows Flow type imports, aliases, and annotations in files missing a valid Flow file declaration.
    // https://github.com/gajus/eslint-plugin-flowtype/blob/master/.README/rules/no-types-missing-file-annotation.md
    "flowtype/no-types-missing-file-annotation": "off",

    // Enforces consistent spacing within generic type annotation parameters.
    // https://github.com/gajus/eslint-plugin-flowtype/blob/master/.README/rules/generic-spacing.md
    "flowtype/generic-spacing": "off",
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
};
