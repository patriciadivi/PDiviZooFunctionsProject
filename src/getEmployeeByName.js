const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  const { employees } = data;
  if (!employeeName) return {};
  const findEmployeeName = employees.find(({ firstName, lastName }) =>
    firstName === employeeName || lastName === employeeName);
  return findEmployeeName;
}

// console.log(employees.filter(({ firstName }) => firstName));
// console.log(employees.find(({ firstName }) => firstName));
// console.log(employees.find(({ lastName }) => lastName));

module.exports = getEmployeeByName;
