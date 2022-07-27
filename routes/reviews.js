const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');


router.post('/sneakers/:id/reviews', reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete);
router.get('/sneakers/:id/reviews/edit', reviewsCtrl.edit);
router.put('/sneakers/:id/reviews/:id', reviewsCtrl.update);

module.exports = router;