const Greeter = require ('./greeter');
const product = require('./product')

console.log(Greeter)

let greet = new Greeter();

console.log(greet.sayHello('Subramanian'))
console.log(product.findAll())