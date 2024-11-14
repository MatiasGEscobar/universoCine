const movie = require("../models/Movie");

const getMoviesService = async() => {
   return await movie.find();
}
  
const createMoviesService = async (newMovie) => {
    const creation = await movie.create(newMovie);
    return creation;
  }
  
  module.exports = {
    getMoviesService,
    createMoviesService
  }