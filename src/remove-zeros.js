// https://www.codewars.com/kata/52aae14aa7fd03d57400058f
function removeZeros(array) {
  if (array.length < 2) return array;
  let index = 0;
  
  while (index <= array.length - 2) {
    let isNumZero = String(array[index]) === '0',
      isNextNonzero = String(array[index + 1]) !== '0';
      
    if (isNumZero && isNextNonzero) {
      // swap the values and start over
      [ array[index + 1], array[index] ] = [ array[index], array[index + 1] ];      
      index = 0;
    }
    else {
      index++;
    }
  }
  
  return array;
}
