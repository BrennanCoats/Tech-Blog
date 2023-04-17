const { User } = require('../models');

const userData = [
  {
    username: 'billybobjr',
    email: "bill@test.com",
    passwords: "password", 
  },
  {
    username: 'teddybear',
    email: "ted@test.com",
    passwords: "password",
  },
  {
    username: 'bobbythegreat',
    email: "bob@test.com",
    passwords: "password",
  },
  {
    username: 'jimothyhalpert',
    email: "jim@test.com",
    passwords: "password",
  },
  {
    username: 'hankfromdea',
    email: "hank@test.com",
    passwords: "password",
  },
  {
    username: 'johnnynoplay',
    email: "john@test.com",
    passwords: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
