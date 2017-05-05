// https://www.codewars.com/kata/5269452810342858ec000951
function isValidCoordinates(coordinates){
  let list = coordinates.split(', '),
    [lat, lng] = list.map(Math.abs);
  
  const isValidValue = value => {
    return /^-?\d+(\.\d+)?$/.test(value);
  };
  
  if (!list.every(isValidValue)) return false;
    
  return lat >= 0 && lat <= 90 && lng >= 0 && lng <= 180;
}
