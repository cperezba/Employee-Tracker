const Role = require('./role');

class Employee extends Role {
    constructor(id, departmentName, title, salary, firstName, secondName, manager) {
        super(id, departmentName, title, salary);
        this.firstName = firstName;
        this.secondName = secondName;
        this.manager = manager;
    }
};

module.exports = Employee;