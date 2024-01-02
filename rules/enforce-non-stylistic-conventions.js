/**
 * Enforce non-stylistic conventions
 *
 * @see https://stylelint.io/user-guide/rules#enforce-non-stylistic-conventions
 */
const enforceNonStylisticConventions = {
  /**
   * Allowed, disallowed & required
   */
  // At-rule
  'at-rule-allowed-list': null,
  'at-rule-disallowed-list': null,
  'at-rule-no-vendor-prefix': true,
  'at-rule-property-required-list': null,

  // Color
  'color-hex-alpha': 'never',
  'color-named': 'never',
  'color-no-hex': null,

  // Comment
  'comment-word-disallowed-list': null,

  // Declaration
  'declaration-no-important': true,
  'declaration-property-unit-allowed-list': {
    /**
     * Disallow `line-height` to have units
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height#prefer_unitless_numbers_for_line-height_values
     */
    'line-height': [],
  },
  'declaration-property-unit-disallowed-list': null,
  'declaration-property-value-allowed-list': null,
  'declaration-property-value-disallowed-list': {
    /**
     * Disallow to write 4 properties
     *
     * @description Safari does not support shorthand with thickness, so disallow to write 4 properties.
     * @example <caption>OK</caption>
     * // text-decoration: solid underline #000000;
     * @example <caption>NG</caption>
     * // text-decoration: solid underline #000000 2px;
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration#browser_compatibility
     */
    'text-decoration': '/.+\\s.+\\s.+\\s.+/',
  },

  // Function
  'function-allowed-list': null,
  'function-disallowed-list': null,
  'function-url-no-scheme-relative': true,
  'function-url-scheme-allowed-list': null,
  'function-url-scheme-disallowed-list': null,

  // Length
  'length-zero-no-unit': true,

  // Media feature
  'media-feature-name-allowed-list': null,
  'media-feature-name-disallowed-list': null,
  'media-feature-name-no-vendor-prefix': true,
  'media-feature-name-unit-allowed-list': null,
  'media-feature-name-value-allowed-list': null,

  // Property
  'property-allowed-list': null,
  'property-disallowed-list': null,
  'property-no-vendor-prefix': true,

  // Rule
  'rule-selector-property-disallowed-list': null,

  // Selector
  'selector-attribute-name-disallowed-list': null,
  'selector-attribute-operator-allowed-list': null,
  'selector-attribute-operator-disallowed-list': null,
  'selector-combinator-allowed-list': null,
  'selector-combinator-disallowed-list': null,
  'selector-disallowed-list': null,
  'selector-no-qualifying-type': true,
  'selector-no-vendor-prefix': true,
  'selector-pseudo-class-allowed-list': null,
  'selector-pseudo-class-disallowed-list': null,
  'selector-pseudo-element-allowed-list': null,
  'selector-pseudo-element-disallowed-list': null,

  // Unit
  'unit-allowed-list': null,
  'unit-disallowed-list': null,

  // Value
  'value-no-vendor-prefix': [
    true,
    {
      ignoreValues: [
        // Allow `-webkit-box` for `line-clamp`
        'box',
      ],
    },
  ],

  /**
   * Case
   */
  'function-name-case': 'lower',
  'selector-type-case': 'lower',
  'value-keyword-case': 'lower',

  /**
   * Empty lines
   */
  'at-rule-empty-line-before': [
    'always',
    {
      except: ['after-same-name', 'first-nested'],
      ignore: ['after-comment', 'first-nested'],
    },
  ],
  'comment-empty-line-before': [
    'always',
    {
      except: ['first-nested'],
      ignore: ['after-comment', 'stylelint-commands'],
    },
  ],
  'custom-property-empty-line-before': [
    'always',
    {
      except: ['after-comment', 'after-custom-property', 'first-nested'],
    },
  ],
  'declaration-empty-line-before': [
    'always',
    {
      except: ['after-comment', 'after-declaration', 'first-nested'],
    },
  ],
  'rule-empty-line-before': [
    'always',
    {
      except: ['after-single-line-comment', 'first-nested'],
    },
  ],

  /**
   * Max & min
   */
  'declaration-block-single-line-max-declarations': 1,
  'declaration-property-max-values': null,
  'max-nesting-depth': 0,
  'number-max-precision': 3,
  'selector-max-attribute': null,
  'selector-max-class': null,
  'selector-max-combinators': null,
  'selector-max-compound-selectors': null,
  'selector-max-id': 0,
  'selector-max-pseudo-class': null,
  'selector-max-specificity': null,
  'selector-max-type': null,
  'selector-max-universal': null,
  'time-min-milliseconds': 100,

  /**
   * Notation
   */
  'alpha-value-notation': 'number',
  'color-function-notation': 'legacy',
  'color-hex-length': 'long',
  'font-weight-notation': 'named-where-possible',
  'hue-degree-notation': 'number',
  'import-notation': 'string',
  'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
  'lightness-notation': null,
  'media-feature-range-notation': null,
  'selector-not-notation': 'complex',
  'selector-pseudo-element-colon-notation': 'double',

  /**
   * Pattern
   */
  'comment-pattern': null,
  'custom-media-pattern': null,
  'custom-property-pattern': null,
  'keyframes-name-pattern': null,
  'selector-class-pattern': null,
  'selector-id-pattern': null,
  'selector-nested-pattern': null,

  /**
   * Quotes
   */
  'font-family-name-quotes': 'always-where-recommended',
  'function-url-quotes': 'always',
  'selector-attribute-quotes': 'always',

  /**
   * Redundant
   */
  'declaration-block-no-redundant-longhand-properties': true,
  'shorthand-property-no-redundant-values': true,

  /**
   * Whitespace inside
   */
  'comment-whitespace-inside': 'always',
}

module.exports = enforceNonStylisticConventions
