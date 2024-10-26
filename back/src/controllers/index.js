const { getMoviesService, createMoviesService } = require("../services/moviesService");

const getMoviesController = (req,res) => {
    res.status(200).json({
        message:"listado de películas",
        data: getMoviesService()
    })
}

const createdMoviesController = (req,res) => {
    req.body;
    const respuesta = createMoviesService(req.body);
    res.status(201).json({
        message: respuesta,
        data: req.body
    })
}

module.exports = {
    getMoviesController,
    createdMoviesController
}