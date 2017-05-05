// https://www.codewars.com/kata/517abf86da9663f1d2000003
function toCamelCase(str){
  return str.replace(/[-_]\w{1}/g, piece => piece.charAt(1).toUpperCase());
}
