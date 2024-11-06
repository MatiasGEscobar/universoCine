const fetchMovies = require("./fetchMovies");
const formJs = require("./form");
const active = require("./active");
const pathname = location.pathname;

if (pathname==="/front/" || pathname.includes("/index")) fetchMovies(); 

else if (pathname.includes("/form")){ formJs(); }

else if (pathname.includes("/paginasRecomendadas")){ active(); }  
