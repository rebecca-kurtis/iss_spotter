const { printFlyTimes } = require('.');
const { nextISSTimesForMyLocation } = require('./iss_promised');



nextISSTimesForMyLocation()
  .then((flyTimes) => {
    printFlyTimes(flyTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });