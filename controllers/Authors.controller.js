const Author = require('../models/Author.model');

module.exports.authorsController = {
    addAuthor: async (req, res) => {
        const {name, description} = req.body;
        try {
            const addedAuthor = await Author.create({name, description});
            res.json(addedAuthor)
        } 
        catch (error) {
            res.json(`${error.message}: Ошибка при добавлении автора`)
        }
    }
}
