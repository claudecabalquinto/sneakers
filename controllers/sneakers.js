const Sneaker = require('../models/sneaker');

module.exports = {
    index,
    show,
    new: newSneaker,
    create
};

function index(req, res) {
  Sneaker.find({}, function(err, sneakers) {
    res.render('sneakers/blog', { title: 'All Sneakers', sneakers });
  });
}
  

function show(req, res) {
  res.render('sneakers/details')
}

  function newSneaker(req, res) {
    res.render('sneakers/new', { title: 'Add Sneaker' });
  }
  
  function create(req, res) {
    const sneaker = new Sneaker(req.body);
    sneaker.save(function(err) {
      if(err) return res.redirect('/sneakers/new');
    });
    res.redirect('/sneakers/blog')
  }