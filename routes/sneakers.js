var express = require('express');
var router = express.Router();
const sneakersCtrl = require('../controllers/sneakers');
const isLoggedIn = require('../config/auth');


router.get('/blog', sneakersCtrl.index);
router.get('/new', isLoggedIn, sneakersCtrl.new);
router.get('/:id', sneakersCtrl.show);
router.post('/blog', isLoggedIn, sneakersCtrl.create);

module.exports = router;