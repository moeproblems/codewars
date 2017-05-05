// https://www.codewars.com/kata/54a91a4883a7de5d7800009c
function incrementString (strng) {
  return strng.replace(/\d*$/, match => {
    let next = +match + 1;
    return '0'.repeat(Math.max(0, match.length - String(next).length)) + next;
  });
}
