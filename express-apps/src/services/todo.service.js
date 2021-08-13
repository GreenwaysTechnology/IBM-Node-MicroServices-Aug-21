const TODOS = require('../mock-data/todo')

class TodoService {
    constructor() {

    }
    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, TODOS);
        })
    }
}
module.exports = new TodoService();