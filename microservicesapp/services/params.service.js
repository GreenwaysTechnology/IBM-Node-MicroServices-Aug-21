const { ServiceBroker } = require('moleculer');

//create broker object
const broker = new ServiceBroker();

broker.createService({
    name: 'greeter',
    actions: {
        //biz methods- service methods
        sayHello(ctx) {
            console.log(ctx.params)
            return `Hello ${ctx.params.name}`
        },
        sayGreet: {
            handler(ctx) {
                const { name,message } = ctx.params;
                // return `Greet ${ctx.params.name}`
                return `${message} ${name}`;
            }
        }
    }
})
///async and await
async function init() {

    try {
        await broker.start()
        const res = await broker.call('greeter.sayHello', { name: 'Subramanian' })
        const greet = await broker.call('greeter.sayGreet', { name: 'Subramanian',message:'Hai' })

        console.log(res,greet);
    }
    catch (err) {
        console.log(err);
    }

}
init();