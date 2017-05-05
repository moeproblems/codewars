// https://www.codewars.com/kata/54b724efac3d5402db00065e
decodeMorse = function(morseCode){
  return morseCode.trim()    
    .split('   ')             // break into words
    .reduce((str, word) => {
      str += word.split(' ')  // break into characters
        .reduce((chars, char) => {
          chars += MORSE_CODE[char];
          return chars
        }, '') + ' ';
      return str;
    }, '').replace(/\s+$/, '');
}
