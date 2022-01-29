const data = require("../data/zoo_data");
const { prices } = data;
function countEntrants(entrants) {
  // REF https://github.com/tryber/sd-19-c-project-zoo-functions/blob/otto-micheletti-project-zoo-functions/src/calculateEntry.js
  const filterChild = entrants.filter((childAge) => childAge.age < 18).length;
  const filterAdult = entrants.filter(
    (adultAge) => adultAge.age >= 18 && adultAge.age < 50).length;
  const filterSenior = entrants.filter(
    (seniorAge) => seniorAge.age >= 50).length;
  return { adult: filterAdult, child: filterChild, senior: filterSenior };
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || !entrants[0]) {
    return 0;
  }
  {
    const qEntrants = countEntrants(entrants);
    const getAdult = qEntrants.adult;
    const getChild = qEntrants.child;
    const getSenior = qEntrants.senior;
    const pAdult = prices.adult;
    const pChild = prices.child;
    const pSenior = prices.senior;
    const total = getAdult * pAdult + getChild * pChild + getSenior * pSenior;
    // console.log(total);
    return total;
  }
}

module.exports = { calculateEntry, countEntrants };
