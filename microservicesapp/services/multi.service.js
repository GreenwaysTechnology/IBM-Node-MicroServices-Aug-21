const { ServiceBroker } = require('moleculer');

//create broker object
const broker = new ServiceBroker();

broker.createService({
    name: 'greeter',
    actions: {
        //multiple methods
        sayHello() {
            return 'Hello'
        },
        sayHai() {
            return 'Hai'
        }
    }
})

broker.createService({
    name: 'users',
    actions: {
        //multiple methods
        findAll() {
            return 'Users-all'
        },
        findById() {
            return 'Users by id'
        }
    }
})

//service methods with meta syntax

broker.createService({
    name: 'orders',
    actions: {

        findAll: {
            //handler
            handler() {
                return 'Orders'
            }
        },
        create: {
            //handler
            handler() {
                return 'Orders create'
            }
        }
    }
})


async function init() {

    try {
        await broker.start()
        const hello = await broker.call('greeter.sayHello')
        const hai = await broker.call('greeter.sayHai')
        const findAll = await broker.call('users.findAll')
        const findById = await broker.call('users.findById')
        const orderFindall = await broker.call('orders.findAll')

        console.log(hello, hai, findAll, findById,orderFindall);
    }
    catch (err) {
        console.log(err);
    }

}
//main();
init();