// https://www.codewars.com/kata/5277c8a221e209d3f6000b56
function validBraces(braces){
  let stack = [],
    valids = ['()', '{}', '[]'];
  
  for (let char of braces) {
    if (stack.length && valids.includes(`${stack.slice(-1)[0]}${char}`)) {
      // there is a matching opening brace to the current closing one
      stack.pop();
      continue;
    }
    stack.push(char);
  }
  
  return stack.length === 0;
}
