export function moviesApi(http) {
  return {
    get: (args) => { 
      var queryString = !args? "s=Batman" : Object.keys(args).map(key => args[key] ? key + '=' + args[key] + '&' : '').join(''); 
      return http.get(queryString);
    } ,
    getById: (id) => { 
      return http.get("i=" + id);
    } 
  };
}
