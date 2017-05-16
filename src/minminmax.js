// https://www.codewars.com/kata/58d3487a643a3f6aa20000ff
function minMinMax(array) {
  let min = Number.MAX_VALUE, 
    max = Number.MIN_VALUE,
    absent;
  
  for (let num of array) {
    absent = min = Math.min(num, min);
    max = Math.max(num, max);
  }
  
  while (array.includes(++absent)) {}
  
  return [min, absent, max];
}
