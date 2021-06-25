module.exports = {
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint/eslint-plugin"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "plugin:jest/recommended",
      ],
      rules: {
        // Bans @ts-<directive> comments from being used or requires descriptions after directive
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
        "@typescript-eslint/ban-ts-comment": "off",
        // Disallow the use of variables before they are defined
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
        "@typescript-eslint/no-use-before-define": "off",
        // This rule has been deprecated in favour of the naming-convention rule.
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
        "@typescript-eslint/camelcase": "off",
        // Disallows non-null assertions using the ! postfix operator
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
        "@typescript-eslint/no-non-null-assertion": "off",
      },
    },
  ],
};
