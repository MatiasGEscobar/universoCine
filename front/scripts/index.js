const {fetchMovies} = require("./fetchMovies");
const {formJs} = require("./form");
const {active} = require("./active");
const pathname = location.pathname;

if (pathname.includes("/index")){
  fetchMovies();
}

if (pathname.includes("/form")){
  formJs();
}

if (pathname.includes("/paginasRecomendadas")){
  active();
}





 
