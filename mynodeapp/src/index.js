/**
 * getUser--->login--->showPage--->Display result
 * 
 * resolve=SuccessAction
 * reject =FailureAction
 */

const getUser = (resolve, reject) => {
    //logic
    let user = {
        name: 'admin',
        password: 'admin'
    };
    //  user = null;
    let error = {
        code: 500,
        message: 'User not found'
    }
    if (user) {
        setTimeout(resolve, 1000, user);
    } else {
        setTimeout(reject, 1000, error);
    }
}

const login = (user, resolve, reject) => {

    let status = 'login success';
    let error = 'login failed';

    if (user.name === 'admin' && user.password === 'admin') {
        setTimeout(resolve, 1000, status)
    } else {
        setTimeout(reject, 1000, error);
    }
}

const showPage = (status, resolve, reject) => {
    let successPage = 'Welcome to Prime Account';
    let failurePage = 'Welcome to Guest Account'

    if (status === 'login success') {
        setTimeout(resolve, 1000, successPage)
    } else {
        setTimeout(reject, 1000, failurePage)

    }


}

getUser(user => {
    console.log(user)
    login(user, status => {
        console.log(status)
        showPage(status, spage => {
            console.log(spage)
        }, epage => {
            console.log(epage);
        })
    }, err => {
        console.log(err);
    })
}, err => {
    console.log(err)
});
