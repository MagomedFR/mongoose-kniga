const Genre = require("../models/Genre.model");

module.exports.genreController = {
    addGenre: async (req,res) => {
        const {name, description} = req.body;
        try {
            const addedGenre = await Genre.create({name, description});
            res.json(addedGenre)
        }catch (error) {
            res.json(`${error.meessage}: Ошибка при добавлении жанра`);
        }
    },
    deleteGenre: async (req, res) => {
        try{
            await Genre.findByIdAndRemove(req,params.id);
            res.json('Жанр удален')
        }catch (error) {
            res.json(`${error.meessage}: Ошибка при удалении жанра`)
        }
    },
    getGenres: async (req, res) => {
        try {const genres = await Genre.find()
        res.json(genres)
    }catch (error) {
        res.json(`${error.meessage}: Ошибка при выводе всех жанров`)
    }
}
}