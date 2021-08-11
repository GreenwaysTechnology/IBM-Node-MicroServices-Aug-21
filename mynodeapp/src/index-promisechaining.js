
const getUser = () => {

    console.log('get user is called')
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
    return new Promise((resolve, reject) => {
        if (user) {
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, error);
        }
    })
}

const login = user => {
    console.log('login is called')

    let status = 'login success';
    let error = 'login failed';
    return new Promise((resolve, reject) => {
        if (user.name === 'admin' && user.password === 'admin') {
            setTimeout(resolve, 1000, status)
        } else {
            setTimeout(reject, 1000, error);
        }
    });

}

const showPage = (status) => {
    console.log('show page is called')

    let successPage = 'Welcome to Prime Account';
    let failurePage = 'Welcome to Guest Account'
    return new Promise((resolve, reject) => {
        if (status === 'login success') {
            setTimeout(resolve, 1000, successPage)
        } else {
            setTimeout(reject, 1000, failurePage)

        }
    });
}

// getUser(user => {
//     console.log(user)
//     login(user, status => {
//         console.log(status)
//         showPage(status, spage => {
//             console.log(spage)
//         }, epage => {
//             console.log(epage);
//         })
//     }, err => {
//         console.log(err);
//     })
// }, err => {
//     console.log(err)
// });

// getUser()
//     .then(user => {
//         console.log(user)
//         login(user)
//             .then(status => {
//                 console.log(status)
//                 showPage(status)
//                     .then(spage => {
//                         console.log(spage)
//                     })
//                     .catch(epage => console.log(epage))
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err));

//The refactored promise code.

// getUser()
//     .then(user => {
//         console.log(user);
//         return login(user)
//     })
//     .then(status => {
//         console.log(status)
//         return showPage(status);
//     })
//     .then(page => {
//         console.log(page);
//     })
//     .catch(err => console.log(err));

//Es6 refactoring

getUser()
    .then(user =>login(user))
    .then(status =>showPage(status))
    .then(page =>console.log(page))
    .catch(err => console.log(err));
