const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
    // slice method
    return drivers.slice(0, 2);
};

//   firstTwoDrivers
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers);

//   lastTwoDrivers
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2);
};

// Create the selectingDrivers array with both functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers);

// Fare Multiplier

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier
    }
    
}  
  // fareDoubler
  const fareDoubler = createFareMultiplier(2);
  console.log(fareDoubler(2));

//   fareTripler

const fareTripler = createFareMultiplier(3);
  console.log(fareTripler(2));
  
 // selectDifferentDrivers function
function selectDifferentDrivers(drivers, selectingFunction) {
    // Use the selectingFunction to select drivers from the arrayOfDrivers
    return selectingFunction(drivers);
  }
  
    // Pass returnFirstTwoDrivers as the selectingFunction
  const first2Drivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
  console.log(firstTwoDrivers); // This will print: ["Driver1", "Driver2"]


