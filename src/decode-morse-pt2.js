// https://www.codewars.com/kata/54b72c16cd7f5154e9000457
var decodeBits = function(bits){  
  let unit,
    count = 0,
    div = '0';

  // remove leading and trailing 0s
  bits = bits.replace(/^0+/, '').replace(/0+$/, '');
  
  const getMinCountOf = char => {
    return bits.split(char)
      .reduce((count, piece) => {
          if (piece.length) {
            count = Math.min(count, piece.length);
          }
          return count;
        }, Number.MAX_VALUE);
  };
  
  // find the smallest sequence of 1s or 0s
  unit = Math.min(getMinCountOf('0'), getMinCountOf('1'));
  
  return bits.split(div.repeat(unit * 7))      // break into words
    .reduce((str, word) => {
      str += word.split(div.repeat(unit * 3))  // break into character pieces
        .reduce((chars, piece) => {
          chars += piece
            .replace(new RegExp(`(${'1'.repeat(unit * 3)})`, 'g'), '-')  // dashes
            .replace(new RegExp(`(${'1'.repeat(unit)})`, 'g'), '.')      // dots
            .replace(/0*/g, '');
          return chars + ' ';
        }, '');        
      return str.trim() + '   ';
    }, '').trim();
}

// copied from part one's submitted solution
var decodeMorse = function(morseCode){
  return morseCode.trim()    
    .split('   ')             // break into words
    .reduce((str, word) => {
      str += word.split(' ')  // break into characters
        .reduce((chars, char) => {
          chars += MORSE_CODE[char];
          return chars
        }, '') + ' ';
      return str;
    }, '').trim();
}
