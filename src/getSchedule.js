const data = require('../data/zoo_data');

const { species } = data;

const { hours } = data;
function getSchedule(scheduleTarget) {
  // seu código aqui
}
console.log(species.filter((e) => e.availability).map((elem) => elem.availability));
console.log(hours);

module.exports = getSchedule;
