const { avoidErrors, enforceNonStylisticConventions } = require('./rules')

module.exports = {
  extends: ['stylelint-config-recess-order'],
  rules: {
    ...avoidErrors,
    ...enforceNonStylisticConventions,
  },
}
