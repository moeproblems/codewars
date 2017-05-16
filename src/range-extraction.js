// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f
const solution = list => {
  let i = 0,
    j = 0,
    result = [];
    
  while (i < list.length) {
    while (list[i] + j - i === list[j]) {
      j++;
    }
    
    if (j - i > 2) {
      result.push(list[i] + '-' + list[j - 1]);
    }
    else {
      result = [...result, ...list.slice(i, j)];
    }
    
    i = j;
    j++;
  }
  
  return result.join(',');
};
