// index.js
const { daysUntilChristmas } = require('./source/christmas');
const { calculateAge } = require('./source/ageCalculator');
const { validateForm } = require('./source/formValidator');

module.exports = {
  daysUntilChristmas,
  calculateAge,
  validateForm,
};
