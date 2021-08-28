const Department = require('./department');

class Role extends Department {
    constructor(id, departmentName, title, salary) {
        super(id, departmentName);
        this.title = title;
        this.salary = salary;
    }
};

module.exports = Role;