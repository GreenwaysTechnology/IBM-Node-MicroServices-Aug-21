//Promise : How to create Promise Object, how to subscribe the 

function blockMe(message) {
    console.log(message);
}

//factory pattern
function getSuccess(){
    return Promise.resolve('Success');  // Promise Object with setTimeout of 0ms
}

blockMe('start')
// let mypromise= getSuccess()
// mypromise.then(res=>console.log(res))
getSuccess()
 .then(res=>console.log(res))
blockMe('end')