const Sneaker = require('../models/sneaker');

module.exports = {
  create,
  delete: deleteReview,
  edit,
  update
};

function update(req, res) {
  Sneaker.findOne(
    {'reviews._id': req.params.id},
    function(err, sneaker) {
      const commentSubdoc = sneaker.reviews.id(req.params.id);
      if (!commentSubdoc.user.equals(req.user._id)) return res.redirect(`/sneakers/${sneaker._id}`);
      commentSubdoc.content = req.body.content;
      commentSubdoc.rating = req.body.rating;
      sneaker.save(function(err) {
        res.redirect(`/sneakers/${sneaker._id}`);
      });  
    }
  );
}

function edit(req, res) {
  Sneaker.findOne({'reviews._id': req.params.id}, function(err, sneaker) {
    const review = sneaker.reviews.id(req.params.id);
    res.render('sneakers/edits', {review, sneaker});
  });
}

async function deleteReview(req, res, next) {
  try {
    const sneaker = await Sneaker.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id});
    if (!sneaker) throw new Error('Error');
    sneaker.reviews.remove(req.params.id);
    await sneaker.save();
    res.redirect(`/sneakers/${sneaker._id}`);
  } catch (err) {
    return next(err);
  }
}

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




