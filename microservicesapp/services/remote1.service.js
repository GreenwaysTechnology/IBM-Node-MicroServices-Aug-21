
const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();

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
        // const res = await broker.call('math.add', { a: 10, b: 20 })
        // console.log(res);
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }

}
init();