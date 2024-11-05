const movieContainer = document.getElementsByClassName("container-fluid")[0];
const axios = require("axios");
const createElement = require("./cardCreator");
const tempData = require("./tempData");

const fetchMovies = async() => {
    try{
      const {data} = await axios.get("http://localhost:3000/movies");
      const arrayHtmlCard = data.data.map(createElement);
      arrayHtmlCard.forEach((movie) => movieContainer.appendChild(movie));
    }catch (err){
      alert("excepción en cargar los archivos desde la API, se utilizan los datos guardados");
      const arrayHtmlCard = tempData.map(createElement);
      arrayHtmlCard.forEach((movie) => movieContainer.appendChild(movie));
    }
  }

  Module.exports = {fetchMovies};