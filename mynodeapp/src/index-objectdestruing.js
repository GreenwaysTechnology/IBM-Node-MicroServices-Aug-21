//object destructuring: es 6 feature

// function printEmployee(employee) {
//  console.log(`Id ${employee.id}`)
//  console.log(`Name ${employee.name}`)
//  console.log(`City ${employee.address.city}`)
// }
// function printEmployee(employee) {
//     //destructuring syntax
//     const { id, name, address } = employee;
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${address.city}`)
// }

// function printEmployee({ id, name, address }) {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${address.city}`)
// }

// const printEmployee = ({ id, name, address }) => {
//     console.log(`Id ${id}`)
//     console.log(`Name ${name}`)
//     console.log(`City ${address.city}`)
// }
const printEmployee = ({ id, name, address: { city } }) => {
    console.log(`Id ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
}

printEmployee({ id: 1, name: 'Subramanian', address: { city: 'Coimbatore' } })

class EmployeeService {
    findAll() {
        return 'findall';
    }
}
let empService = new EmployeeService();
console.log(empService.findAll());


let { findAll } = new EmployeeService();
console.log(findAll());


