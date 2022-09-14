const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    text: String,
    nameAuthor: String,
    _bookId: {
        type: mongoose.SchemaTypes.ObjectId
    }
}) 
const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;