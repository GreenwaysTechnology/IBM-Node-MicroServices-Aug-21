const EventEmitter = require('events');

//declare class which inherits EventEmitter

class CustomerService extends EventEmitter {

    constructor() {
        super();
        //listener registration
        this.on('sales', (evt) => {
            console.log('We got Event');
            console.log(evt)
        })
    }
    //biz methods
    buy(product) {
        //emit event.
        this.emit('sales', product);
    }
}
//create object
const custService = new CustomerService();
custService.buy({ id: 1, name: 'Phone', price: 1000, qty: 1 })
