const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const DbService = require('moleculer-db')
const Fakerator = require('fakerator');
const { started } = require("moleculer-web");


//create Fakerator object
const fakerator = new Fakerator();

const broker = new ServiceBroker();

broker.createService({
    name:'users',
    mixins:[DbService],
    adapter: new DbService.MemoryAdapter(), //NeDb
     //column mapping
     settings :  {
        fields: ["_id","firstName","lastName","email","status"]
    },
     //life cycle method
     afterConnected() {
        //seeding the database with default data
        this.logger.info('connection started')
    },
    //private methods of service
    methods: {
        async seedDB() {
            this.logger.info('Seeding User Database starts');
            //generate fake users
            const fakeUsers = fakerator.times(fakerator.entity.user, 100);
            //insert into db
            const insertedUsers = await this.adapter.insertMany(fakeUsers);
            this.logger.info(`Created ${insertedUsers.length}`, insertedUsers)
        }
    },
    //service life cycle
    async started() {
        if ((await this.adapter.count()) === 0) {
            await this.seedDB();
        } else {
            this.logger.info(`DB contains ${await this.adapter.count()} users`)
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
                aliases: {
                  "REST users": "users"  
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