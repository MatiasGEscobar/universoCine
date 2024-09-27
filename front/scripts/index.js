console.log(tempData);

function CreateElement (movie){
const {title, year, director, duration, genre, rate, poster} = movie;    

const titleMovie = document.createElement("a");
const yearMovie = document.createElement("p");
const directorMovie = document.createElement("p");
const durationMovie = document.createElement("p");
const genreMovie = document.createElement("p");
const rateMovie = document.createElement("p");
const posterMovie = document.createElement("img");                                               // creo los elementos en donde iran las tarjetas
const movieCard = document.createElement("div");                                                 // creo el elemento contenedor de cada tarjeta

titleMovie.classList.add("movie__title");
yearMovie.classList.add("movie__year");
directorMovie.classList.add("movie__director");
durationMovie.classList.add("movie__duration");
genreMovie.classList.add("movie__genre");
rateMovie.classList.add("movie__rate");
posterMovie.classList.add("movie__poster");
movieCard.classList.add("cardsContainer__movie");


titleMovie.innerHTML = title;
yearMovie.innerHTML = `${year}`;
directorMovie.innerHTML = `${director}`;
durationMovie.innerHTML = `${duration}`;
genreMovie.innerHTML = `${genre.join(", ")}`;
rateMovie.innerHTML = `${rate}`;
posterMovie.src = poster;                                                                
posterMovie.alt = `${title} Poster`;                                                             //le asigno a cada elemento creado el valor de cada objeto

movieCard.appendChild(titleMovie);
movieCard.appendChild(posterMovie);
movieCard.appendChild(genreMovie);
movieCard.appendChild(durationMovie);
movieCard.appendChild(yearMovie);
movieCard.appendChild(rateMovie);
movieCard.appendChild(directorMovie);




return movieCard;
}

const movieContainer = document.getElementsByClassName("cardsContainer")[0];

const movieCards = tempData.map(function (movie) {
    return CreateElement(movie);                                                                // Creamos una tarjeta para cada película y las almacenamos en un array
  });
  
                                                                                                // Iteramos sobre el array resultante de movieCards y añadimos cada tarjeta al contenedor
  movieCards.forEach(function (movieCard) {
    movieContainer.appendChild(movieCard);                                                      // Añadimos la tarjeta al contenedor
  });