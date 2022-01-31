const data = require('../data/zoo_data');

const { employees } = data;

const { species } = data;

function getOldestFromFirstSpecies(idParment) {
  // seu código aqui
  const findIds = employees.find((element) => element.id === idParment);
  const acessResponsibleFor = findIds.responsibleFor[0];
  const compareResponsibleFor = species
    .find((elementRes) => elementRes.id === acessResponsibleFor);
  const exitResponsibleFor = compareResponsibleFor.residents;
  exitResponsibleFor.sort((value01, value02) => {
    if (value01.age < value02.age) {
      return 1;
    }
    if (value01.age > value02.age) {
      return -1;
    }
    return 0;
  });
  return [exitResponsibleFor[0].name, exitResponsibleFor[0].sex, exitResponsibleFor[0].age];
}

// console.log(species.find((elementFind) => Object.values(elementFind.id[0])));
// console.log(species.find((elementFind) => Object.values(elementFind.id)));

// console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2'));
module.exports = getOldestFromFirstSpecies;
