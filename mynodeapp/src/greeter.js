

class Greeter {
    constructor() {

    }
    sayHello(name = '') {
        return `Hello ${name}`
    }
}

//share the class
module.exports = Greeter;