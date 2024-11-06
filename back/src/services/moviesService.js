const movie = require("../models/Movie");

const getMoviesService = async() => {
   return await movie.find();
}
  
const createMoviesService = async (movie) => {
    return await movie.create(movie);
  }
  
  module.exports = {
    getMoviesService,
    createMoviesService
  }