
const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
})

broker.createService({
    name: 'producer',
    actions: {
        sayHello(ctx) {
            const { message } = ctx.params;
            ctx.emit('producer.message', `${message} from ${ctx.nodeID}`);
        }
    }
})

async function main() {
    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err)
    }
}
main();