// https://www.codewars.com/kata/53f40dff5f9d31b813000774
const recoverSecret = trips => {
  let result = '',
    chars = {};
  
  while(trips.length) {
    let row = trips.shift();
    
    for (let i = 0; i < row.length; i++) {
      let char = row[i],
        next = row[i + 1],
        charIndex, nextIndex;
      
      if (!result.includes(char)) {
        chars[char] = [];
        result += char;
      }
      
      if (i % row.length === 2) {
        continue;
      }
      
      charIndex = result.indexOf(char);
      nextIndex = result.indexOf(next);
       
      if (~nextIndex && charIndex > nextIndex) {
        let [left, right] = result.split(next);        
        result = left + char + next + right.replace(char, '');
        chars[char].push(next);        
        
        // ensure all previous rules still apply to current character
        for (let c of chars[char]) {
          if (result.indexOf(char) > result.indexOf(c)) {
            // previous rule violated, fix it
            let [left, right] = result.split(c);
            result = left + char + c + right.replace(char, '');
          }
        }
      }    
    }
  }
  
  return result;
}
