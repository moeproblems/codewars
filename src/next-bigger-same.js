// https://www.codewars.com/kata/55983863da40caa2c900004e
function nextBigger(n){
  const getMaxNumber = num => {
    return +String(n)
      .split('')
      .sort((a , b) => b - a)
      .join('');
  };
  
  let max = getMaxNumber(n);
  
  if (max === n) return -1;
  
  while (n++ < max) {
    if (getMaxNumber(n) === max) {
      return n;
    }
  }
}
