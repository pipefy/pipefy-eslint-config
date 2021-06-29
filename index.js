module.exports = {
  extends: [
    "./rules/react",
    "./rules/flow",
    "./rules/typescript",
    "./rules/accessibility",
  ].map(require.resolve),
  env: {
    es2020: true,
  },
};
