const { ServiceBroker } = require('moleculer');
const { log } = console;
const broker = new ServiceBroker();

broker.createService({
    name: 'math',
    actions: {
        //public methods
        calculate(ctx) {
          //calling private method
          const result=this.add(ctx.params.a,ctx.params.b);
          return result
        }
    },
    //private methods
    methods: {
        add(a,b){
            return a +b;
        }
    }
});

async function init() {
    try {
        await broker.start();
        let response;
        //calling public methods
        response = await broker.call('math.calculate', { a: 10, b: 20 });
        log(response);

    }
    catch (e) {
        log(e);
    }
}
init();