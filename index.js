//require and run our main function

const { nextISSTimesForMyLocation } = require('./iss');


const printFlyTimes = function(flyTimes) {
  for (const fly of flyTimes) {
    const date = new Date(0);
    date.setUTCSeconds(fly.risetime);
    const duration = fly.duration;
    console.log(`Next flyover at ${date} for ${duration} seconds!`);
  }

};

nextISSTimesForMyLocation((error, data) => {

  if (error) {
    return console.log("It didn't work!", error);
  }

  //success
  printFlyTimes(data);

});