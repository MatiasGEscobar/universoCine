const movieContainer = document.getElementsByClassName("container-fluid")[0];
const tempData = require("./tempData");
const CreateElement = require("./cardCreator");
const axios = require ("axios");


const fetchMovies = async() => {
  try{
    const data = await axios.get("https://students-api.up.railway.app/movies");
    const arrayHtmlCard = data.data.map(CreateElement);
    arrayHtmlCard.forEach((movie) => movieContainer.appendChild(movie));
  }catch (err){
    alert("excepción en cargar los archivos desde la API, se utilizan los datos guardados");
    const arrayHtmlCard = tempData.map(CreateElement);
    arrayHtmlCard.forEach((movie) => movieContainer.appendChild(movie));
  }
}

fetchMovies();


 
