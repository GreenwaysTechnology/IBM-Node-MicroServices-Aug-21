const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");

const USERS = require('../mock-data/users')


const broker = new ServiceBroker();

//back end service
broker.createService({
    name: "greeter",
    actions: {
        sayHello() {
            return "Hello"
        },
        sayWelcome() {
            return 'Welcome'
        },
        sayHai() {
            return 'Hai'
        }

    }
})

broker.createService({
    name: "users",
    actions: {
        list() {
            return USERS
        }
    }
})

//Frond End Service
//entry url configuration and action configuration - frond to back end configuration

broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {
        routes: [
            {
                path: "/api",
                aliases: {
                    "hello": "greeter.sayHello",
                    "hai": "greeter.sayHai",
                    "welcome": "greeter.sayWelcome",
                    "users": "users.list"
                }
            }
        ]
    }
})

async function init() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
init();