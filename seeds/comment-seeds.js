const { Comment } = require('../models');

const commentData = [
  {
    content: "Happy Birthday!!!",
    date_created: "2023-04-11",
    user_id: 002, 
    post_id: 002,
  },
  {
    content: "Hey dude!",
    date_created: "2023-04-11",
    user_id: 001, 
    post_id: 001,
  },
  {
    content: "Congratulations!",
    date_created: "2023-04-11",
    user_id: 003, 
    post_id: 004,
  },
  {
    content: "How did a snake get in there?!",
    date_created: "2023-04-11",
    user_id: 004, 
    post_id: 003,
  },
  {
    content: "You should buy a mustang",
    date_created: "2023-04-11",
    user_id: 005, 
    post_id: 006,
  },
  {
    content: "Cheese really great fr",
    date_created: "2023-04-11",
    user_id: 006, 
    post_id: 005,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
