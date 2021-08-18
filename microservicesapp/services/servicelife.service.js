const { ServiceBroker } = require('moleculer');
const broker = new ServiceBroker();

broker.createService({
    name: 'math',
    actions: {
        add(ctx) {
            return ctx.params.a + ctx.params.b;
        }
    },
    //life cycle methods
    created() {
        // Fired when the service instance created (with `broker.loadService` or `broker.createService`)
        this.logger.info("created");
    },

    async started() {
        // Fired when broker starts this service (in `broker.start()`)
        this.logger.info("started");
    },
    async stopped() {
        // Fired when broker stops this service (in `broker.stop()`)
        this.logger.info("stoped");
    }
})


async function init() {
    try {
        await broker.start();
        let response;
        response = await broker.call('math.add', { a: 1, b: 3 })
        console.log(`response ${response}`)
    }
    catch (e) {
        log(e);
    }
}
init();