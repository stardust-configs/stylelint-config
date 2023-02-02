const { avoidErrors, enforceNonStylisticConventions } = require('./rules')

module.exports = {
  extends: ['stylelint-config-recess-order', 'stylelint-config-prettier'],
  rules: {
    ...avoidErrors,
    ...enforceNonStylisticConventions,
  },
}
