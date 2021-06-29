module.exports = {
  extends: ["plugin:jsx-a11y/recommended"],
  plugins: ["jsx-a11y"],
  rules: {
    // Enforce that autoFocus prop is not used on elements. Autofocusing elements can cause usability issues for sighted and non-sighted users, alike.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md
    "jsx-a11y/no-autofocus": "off",
    // Enforce that a label tag has a text label and an associated control.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
    "jsx-a11y/label-has-associated-control": "off",
    // Providing captions for media is essential for deaf users to follow along.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md
    "jsx-a11y/media-has-caption": "off",
    // [DEPRECATED] Enforce usage of onBlur over/in parallel with onChange on select menu elements for accessibility.
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
    "jsx-a11y/no-onchange": "off",
  },
};
