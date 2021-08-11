const todoservice = require('./services/todo.service');


async function main() {
    //console.log(todoservice.findAll());
    // console.log(todoservice.getCompletedTodos())
    // console.log('start')
    //  todoservice.findAllAsyncCb(todos=>{
    //      console.log(todos);
    //  })
    // todoservice.findAllAsyncPromise()
    //     .then(todos => console.log(todos));

    const todos = await todoservice.findAllAsyncPromise();
    console.log(todos);
    // console.log('end')
}
main();