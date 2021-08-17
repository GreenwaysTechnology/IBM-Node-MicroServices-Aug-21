const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const USERS = require('../mock-data/users')
const compression = require('compression')

const broker = new ServiceBroker();


broker.createService({
    name: "users",
    actions: {
        list: {
            rest: "GET /",
            handler(ctx) {
                return USERS;
            }
        },
        get: {
            rest: "GET /:id",
            handler(ctx) {
                return USERS.filter(user => user.id == ctx.params.id)
            }
        },
        welcome : {
            rest : 'GET'
        }
    }
})

//Frond End Service
//entry url configuration and action configuration - frond to back end configuration

broker.createService({
    name: 'ApiGateWayService',
    mixins: [ApiGateWayService],
    settings: {
        //middlewares: global middleware
        use: [
            compression()
        ],
        routes: [
            {
                path: "/api",
                aliases: {
                },
                autoAliases: true
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