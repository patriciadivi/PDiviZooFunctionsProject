// const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const mostra = Object.assign(...species.map((e) => ({ [e.name]: e.residents.length })));
    return mostra;
  }
  const verf = Object.values(animal);
  if (verf.length === 1) {
    const animalVerf = species.find((elementAnimal) => elementAnimal.name === verf[0]);
    return animalVerf.residents.length;
  }
  const sexVerf = species.find((elementAnimal) => elementAnimal.name === verf[0]);
  const residentsVerf = sexVerf.residents;
  const fVerf = residentsVerf.filter((element) => element.sex === verf[1]);
  return fVerf.length;
}

// Usar como estudo
console.log(Object.assign(...species.map((elent) => ({ [elent.name]: elent.residents.length }))));
console.log(Object.assign(...species.map((elent) => ({ [elent.name]: elent.residents.length }))));

module.exports = countAnimals;
