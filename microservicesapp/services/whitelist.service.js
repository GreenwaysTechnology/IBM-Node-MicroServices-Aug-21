
const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");

const broker = new ServiceBroker();

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

broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {
        routes: [
            {
                path: "/api",
                whitelist: [
                    "greeter.sayHello"  
                    //Restrict to access all actions in Greeter service
                    //"greeter.*"                 
                ]               
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