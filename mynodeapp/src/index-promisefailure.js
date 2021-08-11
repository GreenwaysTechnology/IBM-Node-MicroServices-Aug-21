//Promise : How to create Promise Object, how to subscribe the 

function blockMe(message) {
    console.log(message);
}

//factory pattern
function getFailure(){
    return Promise.reject('Something Went Wrong');  // Promise Object with setTimeout of 0ms
}

blockMe('start')
getFailure()
 .catch(err=>console.log(err))
blockMe('end')