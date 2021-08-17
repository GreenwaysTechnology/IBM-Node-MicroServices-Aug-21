const { ServiceBroker } = require('moleculer');
const hello = require('./parent.service');

const broker = new ServiceBroker();

broker.createService({
    name: 'greeter',
    mixins: [hello],
    actions: {
        sayGreet: {
            handler(ctx) {
                return 'Greet';
            }
        }
    }
})

async function main(){
    
    try {
        await broker.start()
        broker.repl();
    }
    catch (err) {
        console.log(err);
    }
}
main()