const { ServiceBroker } = require('moleculer');
const { mixins } = require('moleculer-web');
const ApiGateWay = require('moleculer-web');


const broker = new ServiceBroker();

//service which to be accssed by clients

//http://localhost:3000/api/greeter/sayHello
broker.createService({
    name: "greeter",
    actions: {
        sayHello() {
            return "Hello"
        },
        sayHai() {
            return "Hai"
        }
    }
})
//http://localhost:3000/api/users/list
broker.createService({
    name: "users",
    actions: {
        list() {
            return 'USERS'
        }
    }
})


//create service : //Gate Way/http service
broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWay],
    settings: {
        routes: [
            {
                path: '/api'
            }
        ]
    }
})


async function main() {
    await broker.start();
}
main();