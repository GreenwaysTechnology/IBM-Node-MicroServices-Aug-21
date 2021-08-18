
const { ServiceBroker } = require('moleculer');

//service broker configuration
const broker = new ServiceBroker({
    transporter: 'nats://localhost:4222',
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
            async handler(ctx) {
                const { a, b } = ctx.params
                //supply timeout : adder must return the data in 1000ms
                return await ctx.call('adder.addNumbers', { a, b }, {
                    timeout: 5000,
                    fallbackResponse() {
                        //return data from caching server
                        return `The Result is From cachining Server ${0}`
                    }
                })

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