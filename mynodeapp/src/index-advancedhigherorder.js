
let getMessage = action => {
    action('Hello');
}
getMessage(message => console.log(message));

//complex function

let login = (userName, password, successAction, failureAction) => {
    //logic
    if (userName === 'admin' && password === 'admin') {
        successAction('login success')
    } else {
        failureAction('login failed')
    }
}
login('admin', 'admin', status => { console.log(status) }, err => { console.log(err) })
login('foo', 'bar', status => { console.log(status) }, err => { console.log(err) })

