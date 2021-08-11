
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

async function main() {
    // getUser()
    // .then(user =>login(user))
    // .then(status =>showPage(status))
    // .then(page =>console.log(page))
    // .catch(err => console.log(err));

    try {
        const user = await getUser();
        const status = await login(user);
        const page = await showPage(status);
        console.log(page);
    }
    catch(err){
        console.log(err);
    }

}
main()
