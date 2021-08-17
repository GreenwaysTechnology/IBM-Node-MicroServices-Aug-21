
const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    nodeID : 'IBM Server-2',
    transporter:'nats://localhost:4222'
});

broker.createService({
    name: 'adder',
    actions: {
        addNumbers: {
            params: {
                a: 'number',
                b: 'number'
            },
            handler(ctx) {
                const { a, b } = ctx.params
                return `${a + b}  - ` + broker.nodeID;
            }
        }
    }
})

async function init() {

    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.log(err);
    }

}
init();