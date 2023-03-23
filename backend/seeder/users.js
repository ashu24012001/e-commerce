const bcrypt = require('bcryptjs');
const ObjectId = require('mongodb').ObjectId;

const users = [
  {
    name: 'Ashutosh',
    lastName: 'Kumar',
    email: 'ashutoshkr24012001@gmail.com',
    password: bcrypt.hashSync('ashutoshkr24012001@gmail.com', 10),
    isAdmin: true,
  },
  {
    _id: ObjectId('640ff71291eec46874b705b7'),
    name: 'Saurav',
    lastName: 'Kumar',
    email: 'ksaurav866@gmail.com',
    password: bcrypt.hashSync('ksaurav866@gmail.com', 10),
    isAdmin: false,
  },
];

module.exports = users;
