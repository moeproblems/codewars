// https://www.codewars.com/kata/525c65e51bf619685c000059
function cakes(recipe, available) {
  return Math.min.apply(null,
    Object.keys(recipe)
      .map(ing => Math.floor((available[ing] || 0) / recipe[ing]))
  );
}
