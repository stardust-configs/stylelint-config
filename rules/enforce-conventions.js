/**
 * Enforce conventions
 *
 * @see https://stylelint.io/user-guide/rules/list/#enforce-conventions
 */
const enforceConventions = {
  // Alpha-value
  'alpha-value-notation': 'number',

  // Hue
  'hue-degree-notation': 'number',

  // Color
  'color-function-notation': 'legacy',
  'color-hex-alpha': 'never',
  'color-hex-length': 'long',
  'color-named': 'always-where-possible',
  'color-no-hex': true,

  // Length
  'length-zero-no-unit': true,

  // Font family
  'font-family-name-quotes': 'always-where-recommended',

  // Font weight
  'font-weight-notation': 'named-where-possible',

  // Function
  'function-allowed-list': null,
  'function-disallowed-list': null,
  'function-url-no-scheme-relative': true,
  'function-url-quotes': 'always',
  'function-url-scheme-allowed-list': null,
  'function-url-scheme-disallowed-list': null,

  // Keyframes
  'keyframes-name-pattern': null,

  // Number
  'number-max-precision': 3,

  // Time
  'time-min-milliseconds': 100,

  // Unit
  'unit-allowed-list': null,
  'unit-disallowed-list': null,

  // Shorthand property
  'shorthand-property-no-redundant-values': true,

  // Value
  'value-no-vendor-prefix': true,

  // Custom property
  'custom-property-pattern': null,

  // Property
  'property-allowed-list': null,
  'property-disallowed-list': null,
  'property-no-vendor-prefix': true,

  // Declaration
  'declaration-no-important': true,
  'declaration-property-max-values': null,
  'declaration-property-unit-allowed-list': null,
  'declaration-property-unit-disallowed-list': null,
  'declaration-property-value-allowed-list': null,
  'declaration-property-value-disallowed-list': null,

  // Declaration block
  'declaration-block-no-redundant-longhand-properties': true,
  'declaration-block-single-line-max-declarations': 1,

  // Selector
  'selector-attribute-name-disallowed-list': null,
  'selector-attribute-operator-allowed-list': null,
  'selector-attribute-operator-disallowed-list': null,
  'selector-attribute-quotes': 'always',
  'selector-class-pattern': null,
  'selector-combinator-allowed-list': null,
  'selector-combinator-disallowed-list': null,
  'selector-disallowed-list': null,
  'selector-id-pattern': null,
  'selector-max-attribute': null,
  'selector-max-class': null,
  'selector-max-combinators': null,
  'selector-max-compound-selectors': null,
  'selector-max-id': 0,
  'selector-max-pseudo-class': null,
  'selector-max-specificity': null,
  'selector-max-type': null,
  'selector-max-universal': null,
  'selector-nested-pattern': null,
  'selector-no-qualifying-type': true,
  'selector-no-vendor-prefix': true,
  'selector-not-notation': 'complex',
  'selector-pseudo-class-allowed-list': null,
  'selector-pseudo-class-disallowed-list': null,
  'selector-pseudo-element-allowed-list': null,
  'selector-pseudo-element-colon-notation': 'double',
  'selector-pseudo-element-disallowed-list': null,

  // Rules
  'rule-selector-property-disallowed-list': null,

  // Media feature
  'media-feature-name-allowed-list': null,
  'media-feature-name-disallowed-list': null,
  'media-feature-name-no-vendor-prefix': true,
  'media-feature-name-value-allowed-list': null,

  // Custom media
  'custom-media-pattern': null,

  // At-rule
  'at-rule-allowed-list': null,
  'at-rule-disallowed-list': null,
  'at-rule-no-vendor-prefix': true,
  'at-rule-property-required-list': null,

  // Comment
  'comment-pattern': null,
  'comment-word-disallowed-list': null,

  // General / Sheet
  'max-nesting-depth': 0,
  'no-irregular-whitespace': true,
  'no-unknown-animations': true,
  'unicode-bom': 'never',
}

module.exports = enforceConventions
