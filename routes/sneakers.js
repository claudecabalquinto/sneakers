var express = require('express');
var router = express.Router();
const sneakersCtrl = require('../controllers/sneakers');
const isLoggedIn = require('../config/auth');


router.get('/', sneakersCtrl.index);

router.get('/new', isLoggedIn, sneakersCtrl.new);

router.get('/:id', sneakersCtrl.show);

//router.post('/', isLoggedIn, sneakersCtrl.create);

module.exports = router;
