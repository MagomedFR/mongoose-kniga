const {Router} = require('express');
const { genreController } = require('../controllers/Genres.controller')
const route = Router();

route.post("/genres",genreController.addGenre);
route.delete("/genres/:id",genreController.deleteGenre);
route.get("/genres",genreController.getGenres);

module.exports = route