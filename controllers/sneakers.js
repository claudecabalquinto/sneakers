const Sneaker = require('../models/sneaker');

module.exports = {
    index,
    show,
    new: newSneaker,
    create
};

function index(req, res) {
    
      res.render('sneakers/index')
    };
  

 function show(req, res) {
   res.render('sneakers/blog')
 }

  function newSneaker(req, res) {
    res.render('sneakers/new', { title: 'Add Sneaker' });
  }
  
  function create(req, res) {
    const sneaker = new Sneaker(req.body);
    sneaker.save(function(err) {
      if(err) return res.redirect('/sneakers/new');
    });
    res.redirect('/sneakers')
  }