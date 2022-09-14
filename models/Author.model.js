const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
    name: String,
    description: String
})

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;