/**
 * Avoid errors
 *
 * @see https://stylelint.io/user-guide/rules/list/#avoid-errors
 */
const avoidErrors = {
  // Annotation
  'annotation-no-unknown': true,

  // Color
  'color-no-invalid-hex': true,

  // Font family
  'font-family-no-duplicate-names': true,
  'font-family-no-missing-generic-family-keyword': true,

  // Named grid areas
  'named-grid-areas-no-invalid': true,

  // Function
  'function-calc-no-unspaced-operator': true,
  'function-linear-gradient-no-nonstandard-direction': true,
  'function-no-unknown': true,

  // String
  'string-no-newline': true,

  // Unit
  'unit-no-unknown': true,

  // Custom property
  'custom-property-no-missing-var-function': true,

  // Property
  'property-no-unknown': true,

  // Keyframe declaration
  'keyframe-declaration-no-important': true,

  // Keyframe block
  'keyframe-block-no-duplicate-selectors': true,

  // Declaration block
  'declaration-block-no-duplicate-custom-properties': true,
  'declaration-block-no-duplicate-properties': [
    true,
    {
      // For fallback (ex: vh and dvh)
      ignore: ['consecutive-duplicates'],
    },
  ],
  'declaration-block-no-shorthand-property-overrides': true,

  // Block
  'block-no-empty': true,

  // Selector
  'selector-pseudo-class-no-unknown': true,
  'selector-pseudo-element-no-unknown': true,
  'selector-type-no-unknown': true,

  // Media feature
  'media-feature-name-no-unknown': true,

  // At-rule
  'at-rule-no-unknown': true,

  // Comment
  'comment-no-empty': true,

  // General / Sheet
  'no-descending-specificity': true,
  'no-duplicate-at-import-rules': true,
  'no-duplicate-selectors': true,
  'no-empty-source': true,
  'no-invalid-double-slash-comments': true,
  'no-invalid-position-at-import-rule': true,
}

module.exports = avoidErrors
