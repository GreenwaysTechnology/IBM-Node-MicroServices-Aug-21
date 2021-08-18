
const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    transporter: 'nats://localhost:4222'
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
                const { a, b } = ctx.params;
                return new Promise((resolve, reject) => {
                    setTimeout(resolve, 4000, `${a + b} - ${broker.nodeID} `)
                })
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