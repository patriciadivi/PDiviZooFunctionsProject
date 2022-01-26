const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, ageMin) {
  // seu código aqui
  const { species } = data;

  return species.find(({ name }) => name === animal).residents.every(({ age }) => age >= ageMin);
}

// console.log(species.filter(({ name }) => name));
// console.log(getAnimalsOlderThan('otters', 7));
// console.log(species.find(({ name }) => name).residents);
// age.find((elementId) => elementId >= age))

module.exports = getAnimalsOlderThan;
