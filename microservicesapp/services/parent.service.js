
//export service object
module.exports = {
    name: 'hello',
    actions: {
        sayHello: {
            handler(ctx) {
                return 'Hello';
            }
        }
    }
};

