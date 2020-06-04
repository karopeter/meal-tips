const Comment = require('../models/comment')


 exports.createComment = (req, res, next) => {
  const comment = new Comment({
    message: req.body.message,
    name: req.body.name,
    email: req.body.email,
    response: req.body.response
  });
  comment.save().then(createdComment => {
    res.status(201).json({
      message: 'Comment on any post you like',
      commentId: createdComment._id
   });
  });
};

exports.getComments = (req, res, next) => {
   Comment.find().then(documents => {
     res.status(200).json({
      message: 'Comments posted successfully',
      comments: documents
     });
   });
};

exports.deleteComment = (req, res, next) => {
  Comment.deleteOne({ _id: req.params.id }).then(result => {
     console.log(result);
     res.status(200).json({ message: 'Comment delete!'});
  });
};
