/**
 * Avoid errors
 *
 * @see https://stylelint.io/user-guide/rules/#avoid-errors
 */
const avoidErrors = {
  // Descending
  'no-descending-specificity': true,

  // Duplicate
  'declaration-block-no-duplicate-custom-properties': true,
  'declaration-block-no-duplicate-properties': [
    true,
    {
      // For fallback (ex: vh and dvh)
      ignore: ['consecutive-duplicates'],
    },
  ],
  'font-family-no-duplicate-names': true,
  'keyframe-block-no-duplicate-selectors': true,
  'no-duplicate-at-import-rules': true,
  'no-duplicate-selectors': true,

  // Empty
  'block-no-empty': true,
  'comment-no-empty': true,
  'no-empty-source': true,

  // Invalid
  'color-no-invalid-hex': true,
  'function-calc-no-unspaced-operator': true,
  'keyframe-declaration-no-important': true,
  'named-grid-areas-no-invalid': true,
  'no-invalid-double-slash-comments': true,
  'no-invalid-position-at-import-rule': true,
  'string-no-newline': true,

  // Missing
  'custom-property-no-missing-var-function': true,
  'font-family-no-missing-generic-family-keyword': true,

  // Non-standard
  'function-linear-gradient-no-nonstandard-direction': true,

  // Overrides
  'declaration-block-no-shorthand-property-overrides': true,

  // Unknown
  'annotation-no-unknown': true,
  'at-rule-no-unknown': true,
  'function-no-unknown': true,
  'media-feature-name-no-unknown': true,
  'property-no-unknown': true,
  'selector-pseudo-class-no-unknown': true,
  'selector-pseudo-element-no-unknown': true,
  'selector-type-no-unknown': true,
  'unit-no-unknown': true,
}

module.exports = avoidErrors
