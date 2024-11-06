const validationMoviesData = (req,res,next) => {

    const fields = ["title", "year", "director", "duration", "genre", "rate", "poster"];

    const fieldsFiltered = fields.filter((field) => !req.body[field]);
    if(fieldsFiltered.length > 0){
        return res.status(400).json({
            message: `faltan rellenar el campo ${fieldsFiltered[0]}`
        })
    }
    next();
}

module.exports = validationMoviesData;