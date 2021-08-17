
const { ServiceBroker } = require('moleculer');

//service broker configuration
const broker = new ServiceBroker({
    nodeID: 'IBM SERVER-1',
    transporter:'nats://localhost:4222'
});

//math service
broker.createService({
    name: 'math',
    actions: {
        add: {
            //meta information: validation
            params: {
                a: 'number',
                b: 'number'
            },
            handler(ctx) {
                const { a, b } = ctx.params
                //call adder service
                return ctx.call('adder.addNumbers', { a: a, b: b })
            }
        }
    }
})

async function init() {

    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }

}
init();