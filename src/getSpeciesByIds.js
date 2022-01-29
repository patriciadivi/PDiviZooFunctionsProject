const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  // const { species } = data;
  return species.filter(({ id }) => ids.find((elementId) => elementId === id));
}

// console.log(species.filter(({ id }) => id));
// console.log(species.find((value) => value.id));
// console.log(species.filter((fnCall) => fnCall.id).map((mapCall) => mapCall.id));

module.exports = getSpeciesByIds;
