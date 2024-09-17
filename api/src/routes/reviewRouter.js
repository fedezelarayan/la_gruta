const { Router } = require('express');
const reviewRouter = Router();
const { postReviewHandler, deleteReviewHandler, putReviewHandler } = require('../handlers/reviewHandlers');


reviewRouter.post('/post', postReviewHandler);
reviewRouter.delete('/deleteReview', deleteReviewHandler);
reviewRouter.put('/putReview', putReviewHandler);

module.exports =  reviewRouter ;