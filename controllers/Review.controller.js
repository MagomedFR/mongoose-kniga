const Review = require('../models/Review.model');

module.exports.reviewController = {
    addReview: async (req, res) => {
        const {text, nameAuthor, _bookId} = req.body;
        try {
            const addedReview = await Review.create({text, nameAuthor, _bookId})
            res.json(addedReview)
        }catch (error) {
            res.json(`${error.message}: Ошибка при добавлени рецензии к определенной книге`)
        }
    },
    deleteReview: async (req, res) => {
        try {
            await Review.findByIdAndRemove(req.params.id);
            res.json('Рецензия удалена')
        }catch (error) {
            res.json(`${error.message}: Ошибка при удалении рецензии`)
        }
    },
    getReviewsByBook: async (req, res) => {
        try {
        const reviewsByBook = await Review.find({_bookId: req.params.id});
        res.json(reviewsByBook)
        } catch (error) {
            res.json(`${error.message}: Ошибка при выводе всех рецензий к определенной книге`)
        }
    },  
}