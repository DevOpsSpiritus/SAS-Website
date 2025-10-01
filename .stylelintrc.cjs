module.exports = {
  rules: {
    // Allow Tailwind @rules and other PostCSS at-rules
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'screen', 'layer']
      }
    ]
  }
}
