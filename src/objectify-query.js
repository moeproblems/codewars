// https://www.codewars.com/kata/5286d92ec6b5a9045c000087
function convertQueryToMap(query) {
  if (!query) return {};
  
  const setObjProp = (source, prop, value) => {
    let list = prop.split('.'),
      obj = source;
    
    while (list.length > 1) {
      let key = list.shift();
      
      if (!obj[key]) {        
        obj[key] = {};
      }
      
      obj = obj[key];
    }
    
    obj[list.pop()] = decodeURIComponent(value);
    
    return source;
  };
  
  return query.split('&')
    .reduce((s, q) => {
      let pieces = q.split('=');
      s = setObjProp(s, pieces[0], pieces[1]);
      return s;
    }, {}); 
}
