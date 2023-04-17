const router = require('express').Router();
const { User, Comment, Post } = require('../../models');
const sequelize = require('sequelize');
const withAuth = require('../../utils/auth');

// router.get('/', async (req, res) => {
//     try {
//       const postData = await Post.findAll({
//         include: [{ model: User,},{ model: Comment,}],
//         });
//         res.status(200).json(postData);

      
//         if (!postData) {
//           res.status(404).json({ message: 'No post found with this id!' });
//           return;
//         }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get one post
router.get('/:id', async (req, res) => {
  try { 
    const postData = await Post.findByPk(req.params.id, {
    include: [{ model: User,},{ model: Comment,}],
    });
    res.status(200).json(postData);
  

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  const postData = await Post.findAll().catch((err) => { 
      res.json(err);
    });
      const posts = postData.map((post) => post.get({ plain: true }));
      res.render('homepage', { posts, loggedIn: req.session.loggedIn,});
    });

    router.get('/post/:id', async (req, res) => {
      try {
        const dbPostData = await Post.findByPk(req.params.id, {
          include: [
            {
              model: Comment,
              attributes: [
                'id',
                'content',
                'user_id',
              ],
            },
          ],
        });
    
        const post = dbPostData.get({ plain: true });
        res.render('post', { post, loggedIn: req.session.loggedIn, });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

router.post('/', async (req, res) => {
  try { 
    const postData = await Post.create(req.body);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
      users_id: req.body.users_id,
    },
    {
      where: {
        id: req.params.id
      },
    }
  )
  .then((updatedPost) => {
    res.json(updatedPost);
  })
  .catch((err) => res.json(err));
})

router.delete('/:id', async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;