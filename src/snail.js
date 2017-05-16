// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
const snail = function(array) {
  const direction = ['n', 'e', 's', 'w'];
  let lookup = new Array(array.length),
    index = 1,
    result = [],
    row = 0,
    col = 0;
  
  if (!array[0].length) return result;
  if (array.length === 1) return array.pop();
  
  for (let i = 0; i < lookup.length; i++) {
    lookup[i] = new Array(lookup.length).fill(false);
  }
    
  while (true) {
    if (lookup[row][col]) {
      break;
    }
    
    lookup[row][col] = true;
    result.push(array[row][col]);
    
    switch (direction[index]) {
      case 'e':
        if (col + 1 < lookup[0].length && !lookup[row][col + 1]) {
          col++;
        }
        else {
          row++;
          index++;
        }
        break;
      case 's':
        if (row + 1 < lookup.length && !lookup[row + 1][col]) {
          row++;
        }
        else {
          col--;
          index++;
        }
        break;
      case 'w':
        if (col - 1 >= 0 && !lookup[row][col - 1]) {
          col--;
        }
        else {
          row--;
          index = 0;
        }
        break;
      default:
        if (row - 1 >= 0 && !lookup[row - 1][col]) {
          row--;
        }
        else {
          col++;
          index++;
        }
    }
  }
  
  return result;
}
