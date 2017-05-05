// https://www.codewars.com/kata/5267e5827526ea15d8000708
function getMissingIngredients(recipe, added) {
  let result = {};

  // find out the max number of cakes that can be made from the added so far
  const max = Object.keys(added).reduce((amount, key) => {
    amount = Math.max(amount, Math.ceil(added[key] / recipe[key]));
    return amount;
  }, 1);
  
  // cycle through receipe pieces and fill out what could be missing
  for (key of Object.keys(recipe)) {
    let amount = max * recipe[key] - (added[key] || 0);  
    
    if (amount) {
      result[key] = amount;
    }
  }
  
  return result;
}
