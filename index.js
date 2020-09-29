// const myObject = require('./information.js');

// myObject();

var cowsay = require('cowsay');
const monObjet = require('./information.js');

console.log(
  cowsay.say({
    text: `Je suis ${monObjet.name} et je suis du campus de ${monObjet.campus}`,
    e: 'oO',
    T: 'U ',
  })
);
