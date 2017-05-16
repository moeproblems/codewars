// https://www.codewars.com/kata/525f4206b73515bffb000b21
const add = (a, b) => {
  // figure out the shorter and longer number
  let [short, long] = [a, b].sort((a, b) => a.length - b.length),
    add = 0,
    result = [];
  
  // pad the shorter with 0s
  short = '0'.repeat(long.length - short.length) + short;
  
  short = short.split('');
  long = long.split('');
  
  while (long.length) {
    let sum = +long.pop() + +short.pop() + add;
    result.unshift(sum % 10);
    add = Math.floor(sum / 10);
  }
  
  add && result.unshift(add);
  
  return result.join('');
};
