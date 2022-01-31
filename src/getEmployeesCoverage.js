const data = require('../data/zoo_data');

const { species } = data;

const { employees } = data;

const animalsByID = (id) => species.find((animal) => animal.id === id);

const exitEmployees = (valueParamet) => {
  const mapEmployesIds = employees.map((employee) => employee.id);
  const mapEmployesFirstName = employees.map((employee) => employee.firstName);
  const mapEmployesLastName = employees.map((employee) => employee.lastName);
  if (mapEmployesIds.includes((valueParamet))) {
    return employees.find((employee) => employee.id === valueParamet);
  }
  if (mapEmployesFirstName.includes((valueParamet))) {
    return employees.find((employee) => employee.firstName === valueParamet);
  }
  if (mapEmployesLastName.includes((valueParamet))) {
    return employees.find((employee) => employee.lastName === valueParamet);
  }
  return null;
};

const lookingForEmployee = (employee) => {
  const responsibleFor = employees.filter((elem) => elem.responsibleFor);
  const speciesEmployee = responsibleFor.map((a) => animalsByID(a));

  const exitObj = {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesEmployee.map((element) => element.name),
    locations: speciesEmployee.map((animal) => animal.location),
  };
  return exitObj;
};

const catchAllEmployees = () => {
  const res = [];
  employees.forEach((employee) => {
    res.push((lookingForEmployee(employee)));
  });
  return res;
};

const getDatEmployee = (valueParamet) => {
  const res = exitEmployees(valueParamet);
  if (res !== null) {
    return lookingForEmployee(res);
  }
  throw new Error('Informações inválidas');
};

function getEmployeesCoverage(paramentVanAmptenare) {
  // seu código aqui
  if (!paramentVanAmptenare) {
    return catchAllEmployees();
  }
  return getDatEmployee(Object.values(paramentVanAmptenare)[0]);
}

module.exports = getEmployeesCoverage;
