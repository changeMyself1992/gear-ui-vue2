module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'no-descending-specificity': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep'],
      },
    ],
  },
};