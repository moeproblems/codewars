// https://www.codewars.com/kata/51eead3461ccf7db04000017
class UriBuilder {
  constructor(uri) {
    this.base = '';
    this.params = {};
    this.parseInitialUri(uri);
  }
  
  parseInitialUri(uri) {
    const pieces = uri.split('?');
    this.base = pieces[0];
    
    if (pieces.length > 1) {
      this.params = pieces[1].split('&')
        .reduce((obj, query) => {
          let [key, value] = query.split('=');
          obj[key] = value;
          return obj;
        }, {});
    }
  }
  
  build() {
    return this.base + '?' + 
      Object.keys(this.params)
        .map(key => `${key}=${encodeURIComponent(this.params[key])}`)
        .join('&');
  }
}
