const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: String,
    author: String,
    genre: String,
    _genreId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Genre"
    },

    _authorId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Author"
    }

})
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
