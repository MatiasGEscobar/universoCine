const { getMoviesService, createMoviesService } = require("../services/moviesService");

const getMoviesController = async (req,res) => {
    try {
    const respuesta = await getMoviesService();
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

const createdMoviesController = async (req,res) => {
    try{
    const respuesta = await createMoviesService(req.body);
    res.status(201).json({
        message: "Pelicula creada con exito",
        data: respuesta
    })
    }catch(error){
        res.status(500).json({
            message: "error creando pelicula",
            data: error
        })
    }
}

module.exports = {
    getMoviesController,
    createdMoviesController
}