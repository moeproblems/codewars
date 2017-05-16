// https://www.codewars.com/kata/563fbac924106b8bf7000046
const generateBC = (url, separator) => {
  // clean up url
  url = url.replace(/^(https?):\/\//g, '')
    .replace(/([#\?].*)/g, '')
    .replace(/\/$/, '')
  
  let longHref = '/',
    result;
  
  const MAX_LENGTH = 30,
    ignore = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"],
    TEMPLATES = {
      active: '<span class="active">%(text)</span>',
      regular: '<a href="%(href)">%(text)</a>'
    };
  
  // replace method to build urls from templates
  const replace = (type, obj) => {
    let tpl = TEMPLATES[type];
    
    Object.keys(obj)
      .forEach(key => {
        tpl = tpl.replace(`%(${key})`, obj[key]);
      });
      
    return tpl;
  };
  
  let [base, ...pieces] = url.split('/');    
  
  // get rid of last one if its index
  if (/^index.*/i.test(pieces.slice(-1))) {
    pieces.pop();
  }
  
  if (!pieces.length) {
    return replace('active', { text: 'HOME' });
  }
  
  // normalize pieces
  pieces = pieces.map(piece => {
    longHref += `${piece}/`;
    let text = piece;
    
    if (piece.length > 30) {      
      text = piece.split('-')
        .reduce((t, p) => {
          return t += ignore.includes(p.toLowerCase()) ? '' : p.charAt(0)
        }, '');
    }
    else if (piece.includes('-')) {
      text = piece.split('-').join(' ');
    }
    
    return {
      href: longHref,
      text: text.replace(/\.(html?|php|asp)$/g, '').toUpperCase()
    }
  });
  
  result = [
    replace('regular', { href: '/', text: 'HOME' }),
    replace('active', pieces.pop())
  ];
  
  if (pieces.length) {
    // squeeze the middle parts between first and last
    result.splice(1, 0, pieces.map(obj => replace('regular', obj)).join(separator));
  }
  
  return result.join(separator);
};
