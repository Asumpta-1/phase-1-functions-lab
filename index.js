function distanceFromHqInBlocks(start) {
  if (start > 42) {
    return start - 42;
  } else {
    return 42 - start;
  }
}

function distanceFromHqInFeet(start) {
  return distanceFromHqInBlocks(start) * 264;
}

function distanceTravelledInFeet(a,b) {
  if (b>a) {
  return ((b-a) * 264 );
  } else {
    return (a-b) *264;
  }
  
}

// function calculatesFarePrice(a,b) {
// if (a<400) {
// return 'free';
// } else if (a>400 && a<2000) {
// return '2 cents per foot';
// } else if (a > 2000 && a < 2500) {
//     return 'flat fare';
// } else {
//     return 'cannot travel that far';
// }
// }
function calculatesFarePrice(a,b) {
  let distance = distanceTravelledInFeet(a,b)

	if(distance < 400){
		return 0
	}
       else if (distance <2000) {
return (distance - 400) * 0.02
}
	else if (distance > 2500) {
		return 'cannot travel that far'
	}
	else return 25
}

