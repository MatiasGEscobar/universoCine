
function CreateElement (movie){
const {title, year, director, duration, genre, rate, poster} = movie;    

const titleMovie = document.createElement("a");                                     // creo cada elemento que contendra a cada propiedad extraida del objeto, le asigno una clase y lo defino.
titleMovie.href = "#"; 
titleMovie.classList.add("card-title");
titleMovie.classList.add("p-1");
titleMovie.innerHTML = title;

const yearMovie = document.createElement("li");
yearMovie.classList.add("card-text");
yearMovie.innerHTML = `${year}`;

const directorMovie = document.createElement("li");
directorMovie.classList.add("card-text");
directorMovie.innerHTML = `${director}`;

const durationMovie = document.createElement("li");
durationMovie.classList.add("card-text");
durationMovie.innerHTML = `${duration}`;

const genreMovie = document.createElement("li");
genreMovie.classList.add("card-text");
genreMovie.innerHTML = `${genre.join(", ")}`;

const rateMovie = document.createElement("li");
rateMovie.classList.add("card-text");
rateMovie.innerHTML = `${rate}`;

const posterMovie = document.createElement("img");                                               
posterMovie.classList.add("card-img-top");
posterMovie.src = poster;
posterMovie.alt = `${title} Poster`;

const movieCard = document.createElement("div");                                                 // creo el elemento contenedor de cada tarjeta
movieCard.classList.add("card");
movieCard.classList.add("m-auto");

const movieCardBody = document.createElement("div");
movieCardBody.classList.add("card_body");

const movieCardUl = document.createElement("ul");
movieCardUl.classList.add("list-group");
movieCardUl.classList.add("list-group-flush");




movieCard.appendChild(movieCardBody);                                                            // apendeo cada propiedad extraida del objeto a su contenedor
movieCard.appendChild(posterMovie);                                                                         
movieCard.appendChild(movieCardUl);
movieCardBody.appendChild(titleMovie);                                                       
movieCardUl.appendChild(genreMovie);
movieCardUl.appendChild(durationMovie);
movieCardUl.appendChild(yearMovie);
movieCardUl.appendChild(rateMovie);
movieCardUl.appendChild(directorMovie);



return movieCard;
};

module.exports = CreateElement;