//non blocking using timer

function blockMe(message) {
    console.log(message);
}
//non blocking function
function delay(action) {
    //high level api to schdule the task in the background
    setTimeout(action, 5000, 'Hello!!!')
}

//
blockMe('start')
delay(response=>console.log(response));
blockMe('end')
blockMe('still going')