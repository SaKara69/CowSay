const myIdentity = require('./information.js');

var cowsay = require('cowsay');

console.log(
  cowsay.say({
    text: `${myIdentity}`,
    e: 'oO',
    T: 'U ',
  })
);
