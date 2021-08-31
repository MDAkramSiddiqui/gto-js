// 1

function Employee(name) {
    this.name = name;
    this.getName = () => this.name;
}

var emp = Object.create(new Employee('John'));
delete emp;

console.log(emp.getName());