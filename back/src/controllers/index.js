const { getMoviesService, createMoviesService } = require("../services/moviesService");

const getMoviesController = async(req,res) => {
    try {
    const respuesta = awaitgetMoviesService();
    res.status(200).json({  
        message: "movies obtenidos",
        data: respuesta
    })
}   catch (error) {
    res.status(500).json({
        message: "error obteniendo movies",
        data: error
    })
}
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