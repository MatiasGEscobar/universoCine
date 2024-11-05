const { Movie } = require("../models/Movie");

const getMoviesService = async() => {
   return await Movie.find();
}
  
const createMoviesService = async (movie) => {
    return await Movie.create(movie);
  }
  
  module.exports = {
    getMoviesService,
    createMoviesService
  }