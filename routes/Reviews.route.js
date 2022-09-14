const {Router} = require('express')
const { reviewController } = require('../controllers/Review.controller')
const route = Router();

route.post("/reviews/:id",reviewController.addReview);
route.delete("/reviews",reviewController.deleteReview);
route.get("/reviews/books/:id",reviewController.getReviewsByBook);

module.exports = route