const { ServiceBroker } = require('moleculer');

//create broker object
const broker = new ServiceBroker();

//create service
//service takes service schema as parameter
broker.createService({
    name: 'hello',
    actions: {
        //biz methods- service methods
        sayHello() {
            return 'Hello Moleculer!'
        }
    }
})

//thenable pattern
function main() {
    broker.start()
        .then(() => {
            console.log('broker is ready')
            //call service 
            broker.call('hello.sayHello').then(res => {
                console.log(res);
            })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => console.log(err))
}
///async and await
async function init() {

    try {
        await broker.start()
        const res = await broker.call('hello.sayHello')
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }

}
//main();
init();