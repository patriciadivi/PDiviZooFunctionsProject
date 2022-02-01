const data = require('../data/zoo_data');

const { species } = data;

const { employees } = data;

function employeeData(employeeInformation) {
  const employeeName = employees.find((elementN) => elementN.firstName === employeeInformation);
  const employeeLastName = employees.find((elementL) => elementL.lastName === employeeInformation);
  const employeeId = employees.find((idElement) => idElement.id === employeeInformation);
  return (employeeName || employeeLastName || employeeId);
}

function compareIdSpecie(specieId) {
  return species.find((element) => element.id === specieId).name;
  // console.log(compareIdSpecie(specieId));
}

function getEmployeeId(verifIds) {
  const arrVrifIds = [];
  verifIds.forEach((getResponsibleFor) => {
    arrVrifIds.push(compareIdSpecie(getResponsibleFor));
  });
  return arrVrifIds;
}

function getLocationSpecieName(nameSpecie) {
  return species.find((elementSpecie) => elementSpecie.name === nameSpecie).location;
}

function getLocationSpecies(listSpecies) {
  const arrSpecies = [];
  listSpecies.forEach((nameSpecie) => {
    arrSpecies.push(getLocationSpecieName(nameSpecie));
  });
  return arrSpecies;
}

function getLocationS(locationSpecie) {
  const arrLocation = [];
  for (let index = 0; index < locationSpecie.length; index += 1) {
    arrLocation.push(species.find((element) => element.id === locationSpecie[index]).location);
  }
  return arrLocation;
}

function getSpecieTest(parementSpecie) {
  const arrSpecie = [];
  for (let index = 0; index < parementSpecie.length; index += 1) {
    arrSpecie.push(species.find((element) => element.id === parementSpecie[index]).name);
  }
  return arrSpecie;
}
function catchAllEmployees() {
  const exitEmployees = [];
  employees.forEach((element) => {
    const employeeObj = { id: '', fullName: '', species: [], locations: [] };
    employeeObj.id = element.id;
    employeeObj.fullName = element.firstName.concat(' ', element.lastName);
    employeeObj.species = getEmployeeId(element.responsibleFor);
    employeeObj.locations = getLocationSpecies(employeeObj.species);
    exitEmployees.push(employeeObj);
  });
  return exitEmployees;
}

function catchEmployee(employee) {
  const resEmployee = employeeData(employee);
  const employeeObj = {
    id: `${resEmployee.id}`,
    fullName: `${resEmployee.firstName} ${resEmployee.lastName}`,
    species: getSpecieTest(resEmployee.responsibleFor),
    locations: getLocationS(resEmployee.responsibleFor),
  };
  return employeeObj;
}

function getEmployeesCoverage(paramentEmployee) {
  // seu código aqui
  // const paramentPrimary = Object.values(paramentEmployee)[0];
  // console.log(paramentPrimary);
  if (!paramentEmployee) {
    return catchAllEmployees();
  }
  if (!employeeData(Object.values(paramentEmployee)[0])) {
    throw new Error('Informações inválidas');
  }
  return catchEmployee(Object.values(paramentEmployee)[0]);
}
// console.log(getSpecieTest('c1f50212-35a6-4ecd-8223-f835538526c2'));
// getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' });
// console.log(getEmployeesCoverage);

module.exports = getEmployeesCoverage;
