// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
  const hqLocation = 42
  const numberOfBlocks = Math.abs(pickUpLocation - hqLocation)
  return  numberOfBlocks
}

function distanceFromHqInFeet(pickUpLocation) {
  const blocks = distanceFromHqInBlocks(pickUpLocation);
  const distanceInFeet = blocks * 264;
  return distanceInFeet;
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
  const distanceInFeet = Math.abs(destinationBlock - startBlock) * 264;
  return distanceInFeet;
}

function calculatesFarePrice(startBlock, destinationBlock) {
  const distanceInFeet = Math.abs(destinationBlock - startBlock) * 264;
  console.log(distanceInFeet)
  if (distanceInFeet < 400) {
    return 0;
  }else if (distanceInFeet <2000) {
    return (distanceInFeet - 400) * 0.02
  }else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
   }else {
    return 'cannot travel that far';
   }
}

