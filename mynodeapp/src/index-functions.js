//higher order function -  listner pattern

function sayHello() {
    console.log('Hello')
}
sayHello();
//parameters and args

//a and b are args
function add(a = 0, b = 0) {
    return a + b;
}
//1 , 2 are parameters
console.log(add(1, 2))
console.log(add()) //undefined,undefined
/////////////////////////////////////////////////////////////////////////////////////
//Function is first class citzien -  function can be stored inside variable,passed around.

//var ,let ,const - variable declaration

var i = 10; // es 5 style
let j = 100; // es 6 style
const e = 100; // es 6 style

console.log(i, j, e)

i = 900;
j = 89;
// e =900;

console.log(i, j, e)

//anonmous function
let greet = function (name = 'default') {
    console.log('greet', name)
};
greet();
greet('Subramanian')

//arrow function. anonmous function in es 6
let hai = (name = 'default') => {
    console.log('greet', name)
};
hai();

//if function has only one line of body ,we can remove  {}
hai = (name = 'default') => console.log('greet', name);
hai();

//arrow and return

let multiply = (a = 0, b = 0) => {
    return a * b;
}
console.log(multiply(10, 10))

//if function has only one line of body with return statement, we can remove return and {}

multiply = (a = 0, b = 0) => a * b;
console.log(multiply(10, 10))

//one parameter , no default value and return the same. we can remove () and {} and return statement
let echo = message => message

console.log(echo("Hello Echo"))





