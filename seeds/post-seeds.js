const { Post } = require('../models');

const postData = [
  {
    title: 'Hello',
    content: "Whats up everybody!",
    users_id: 001, 
  },
  {
    title: 'Its my birthday',
    content: "Happy Birthday to me!",
    users_id: 002, 
  },
  {
    title: 'Help!',
    content: "Somebody help theres a snake in my toilet!",
    users_id: 003, 
  },
  {
    title: 'I graduated',
    content: "I finally graduated Highschool!",
    users_id: 004, 
  },
  {
    title: 'I like cheese',
    content: "Cheese is a delicious treat",
    users_id: 005, 
  },
  {
    title: "I'm buying a car",
    content: "What kind of car should I buy?",
    users_id: 006, 
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
