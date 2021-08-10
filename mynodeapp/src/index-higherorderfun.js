//Higher order function


function doStuff(a) {
    console.log(a)
}

//we can pass any literal as parameter
doStuff(10)
doStuff("hello")
doStuff(true)
let x = 10;
doStuff(x)
//pass function as parameter

//now connect is higher order
function connect(action) {
    console.log(action);
    action(); //invocation 
}
//pass function as parameter
let myFun = function () {
    console.log('myFun')
}
connect(myFun);

connect(function () {
    console.log('my fun anonmous')
});

//arrow
let myconnect = action => {
    console.log(action);
    action(); //invocation 
};

let myFun1 = () => console.log('myFun-arrow');
myconnect(myFun1);

myconnect(() => console.log('my fun anonmous-arrow'));






