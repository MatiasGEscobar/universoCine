const { Movie } = require("../models/Movies");

const getMoviesService = async() => {
   return await Movie.find();
}
  
const createMoviesService = (movie) => {
    return Movie.create(movie);
  }
  
  module.exports = {
    getMoviesService,
    createMoviesService
  }