const movieContainer = document.getElementsByClassName("container-fluid")[0];
const axios = require("axios");
const createElement = require("./cardCreator");
const tempData = require("./tempData");

const fetchMovies = async() => {
    try{
      const {data} = await axios.get("http://localhost:3000/movies");
      const arrayHtmlCard = data.data.map(createElement);
      console.log(arrayHtmlCard);
      arrayHtmlCard.forEach((movie) => movieContainer.appendChild(movie));
    }catch (error){
      alert("excepción en cargar los archivos desde la API, se utilizan los datos guardados");
      const arrayHtmlCardfalse = tempData.map(createElement);
      arrayHtmlCardfalse.forEach((movie) => movieContainer.appendChild(movie));
    }
  }

  module.exports = fetchMovies;