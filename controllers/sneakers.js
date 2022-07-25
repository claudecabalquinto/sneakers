const Sneaker = require('../models/sneaker');

module.exports = {
    index,
    show,
    new: newSneaker,
};

function index(req, res) {
    Sneaker.find({}, function(err, sneakers) {
      res.render('sneakers/index', { title: 'All Sneakers', sneakers });
    });
  }

  function show(req, res) {
    res.render('sneakers/blog')
  }

  function newSneaker(req, res) {
    res.render('sneakers/new', { title: 'Add Sneaker' });
  }