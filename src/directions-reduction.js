// https://www.codewars.com/kata/550f22f4d758534c1100025a
function dirReduc(arr){
  let index = 0;
  const opposites = ['EASTWEST', 'WESTEAST', 'NORTHSOUTH', 'SOUTHNORTH'];
  
  while (index++ < arr.length) {
    if (opposites.includes(arr.slice(index, index + 2).join(''))) {
      arr.splice(index, arr.length === 1 ? 0 : 2);
      index = -1;
    }
  }

  return arr;
}
