const { Router } = require("express");
const { getMoviesController, createdMoviesController } = require("../controllers/index");
const { validationMoviesData } = require("../middlewares");

const moviesRouter = Router();

moviesRouter.get("/", getMoviesController);
moviesRouter.post("/",validationMoviesData, createdMoviesController);

module.exports = moviesRouter;