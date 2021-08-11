//promise constructors

function blockMe(message) {
    console.log(message);
}
function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 5000, 'Success Info')
    });
}

blockMe('start')
delay()
  .then(res=>console.log(res))
  .catch(err=>console.log(err));
blockMe('end')