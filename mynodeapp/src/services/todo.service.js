const TODOS = require('../mock-data/todo')

class TodoService {
    constructor() {

    }
    //sync api
    findAll() {
        return TODOS;
    }

    findAllAsyncCb(callback) {
        setTimeout(callback, 5000, TODOS);
    }

    findAllAsyncPromise() {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, TODOS);
        })
    }

    getCompletedTodos() {
        return TODOS.filter(todo => todo.completed)
    }
}
module.exports = new TodoService();