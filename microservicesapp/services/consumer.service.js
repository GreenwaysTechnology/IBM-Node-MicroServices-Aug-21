const { ServiceBroker } = require('moleculer')

const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
})

broker.createService({
    name: 'consumer',
    events: {
        "producer.message"(message) {
            console.log(message)
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
main()