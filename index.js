module.exports = {
  extends: ["./rules/react", "./rules/flow", "./rules/typescript"].map(
    require.resolve
  ),
  env: {
    es2020: true,
  },
};
