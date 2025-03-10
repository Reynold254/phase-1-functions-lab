const headquarters = 42;
const blockLengthInFeet = 264;

// Function to calculate the number of blocks from Scuber HQ
function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - headquarters);
}

// Function to calculate the distance from Scuber HQ in feet
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * blockLengthInFeet;
}

// Function to calculate the total distance traveled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * blockLengthInFeet;
}

// Function to calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

// Example usage
console.log(distanceFromHqInBlocks(50)); // 8
console.log(distanceFromHqInFeet(50)); // 2112
console.log(distanceTravelledInFeet(34, 38)); // 1056
console.log(calculatesFarePrice(34, 38)); // 13.12
