// console.log(tempData);
const movieContainer = document.getElementsByClassName("cardsContainer")[0];


function CreateElement (movie){
const {title, year, director, duration, genre, rate, poster} = movie;    

const titleMovie = document.createElement("a");                                     // creo cada elemento que contendra a cada propiedad extraida del objeto, le asigno una clase y lo defino. 
titleMovie.classList.add("movie__title");
titleMovie.innerHTML = title;

const yearMovie = document.createElement("p");
yearMovie.classList.add("movie__year");
yearMovie.innerHTML = `${year}`;

const directorMovie = document.createElement("p");
directorMovie.classList.add("movie__director");
directorMovie.innerHTML = `${director}`;

const durationMovie = document.createElement("p");
durationMovie.classList.add("movie__duration");
durationMovie.innerHTML = `${duration}`;

const genreMovie = document.createElement("p");
genreMovie.classList.add("movie__genre");
genreMovie.innerHTML = `${genre.join(", ")}`;

const rateMovie = document.createElement("p");
rateMovie.classList.add("movie__rate");
rateMovie.innerHTML = `${rate}`;

const posterMovie = document.createElement("img");                                               
posterMovie.classList.add("movie__poster");
posterMovie.src = poster;
posterMovie.alt = `${title} Poster`;

const movieCard = document.createElement("div");                                                 // creo el elemento contenedor de cada tarjeta
movieCard.classList.add("cardsContainer__movie");

const movieCardContent = document.createElement("div");
movieCardContent.classList.add("movie_content");

const movieCardDetails = document.createElement("div");
movieCardDetails.classList.add("movie_details");



movieCard.appendChild(titleMovie);                                                               // apendeo cada propiedad extraida del objeto a su contenedor
movieCard.appendChild(movieCardContent);                                                         
movieCard.appendChild(movieCardDetails);
movieCardContent.appendChild(posterMovie);                                                       //y otros 2 contenedores que contendran la imagen y descripcion por separado los apendeo al contenedor "mayor"
movieCardDetails.appendChild(genreMovie);
movieCardDetails.appendChild(durationMovie);
movieCardDetails.appendChild(yearMovie);
movieCardDetails.appendChild(rateMovie);
movieCardDetails.appendChild(directorMovie);

movieContainer.appendChild(movieCard);         
}
                                                                        
const renderize = () => {
  $.get("https://students-api.up.railway.app/movies", (data,status) => {
    data.forEach((movie) => CreateElement(movie));                                       
  })
};

renderize();
 