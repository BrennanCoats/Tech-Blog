const router = require('express').Router();
const { User, Comment, Post } = require('../../models');
const sequelize = require('sequelize');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const commentData = await Comment.findAll();
        res.status(200).json(commentData);

      
        if (!commentData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
    try { 
      const commentData = await Comment.findByPk(req.params.id,);
      res.status(200).json(commentData);
    
  
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    try { 
      const commentData = await Comment.create(req.body);
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    Comment.update(
      {
        content: req.body.content,
        date_created: req.body.date_created,
        user_id: req.body.user_id,
        post_id: req.body.post_id,
      },
      {
        where: {
          id: req.params.id
        },
      }
    )
    .then((updatedcomment) => {
      res.json(updatedcomment);
    })
    .catch((err) => res.json(err));
  });

  router.delete('/:id', async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!commentData) {
        res.status(404).json({ message: 'No comment found with this id!' });
        return;
      }
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;