const Sneaker = require('../models/sneaker');

module.exports = {
  create
};


function create(req, res) {
  Sneaker.findById(req.params.id, function(err, sneaker) {
   
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    sneaker.reviews.push(req.body);
    sneaker.save(function(err) {
    
      res.redirect(`/sneakers/${sneaker._id}`);
    });
  });
}