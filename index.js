const inquirer = require('inquirer');
const mysql = require("mysql2");
const fs = require('fs');
const cTable = require('console.table');




//Constructors
const {addDepartmentSQL, addRoleSQL, viewAllDepartmentsSQL} = require('./lib/helpers');
// const Role = require('./lib/role');
// const Employee = require('./lib/employee')


//MySQL Connection
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'eastwest',
    database: 'employee_db'
  },
  console.log(`Connected to the movies_db database.`)
);


//Log
const departmentLog = [];
const roleLog = [];
const employeeLog = [];




const mainMenu = () => {
  inquirer.prompt({
    type: 'list',
    message: 'What would you like to do?',
    name: 'mainMenu',
    choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit']
  })

    .then(result => {
      switch (result.mainMenu) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Quit':
          return;
      }
    })
}

//View All Departments
const viewAllDepartments = async (db) => {
  const response = await viewAllDepartmentsSQL(db);
  console.log(viewAllDepartmentsSQL(db));
  console.table = response;
  mainMenu();
};

//View All Roles
const viewAllRoles = () => {
  console.table(roleLog);
};

//View All Employees
const viewAllEmployees = () => {
  console.table(employeeLog);
};



//Add Department
const addDepartment = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'departmentName',
    message: `What is the name of the department?`,
  }])
    .then(result => {
      addDepartmentSQL(db, result.departmentName);
     
      
      // let department = new Department(1, result.departmentName);
      // db.push(department);
      mainMenu();
    })
};



//Add Role
const addRole = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: `What is the name of the role?`,
  },
  {
    type: 'input',
    name: 'salary',
    message: `What is the salary of the role?`,
  },
  {
    type: 'input',
    name: 'department',
    message: `What department does the role belong to?`,
  }])
    .then(result => {
      addRoleSQL(db, result.title, result.name, result.department);
      mainMenu();
    })
};


//Add Employee
const addEmployee = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'firstName',
    message: `What is the empployee's first name?`,
  },
  {
    type: 'input',
    name: 'lastName',
    message: `What is the employee's last name?`,
  },
  {
    type: 'input',
    name: 'role',
    message: `What is the employee's role?`,
  },
  {
    type: 'input',
    name: 'manager',
    message: `What is the employee's manager?`,
  }])
    .then(result => {
      let employee = new Employee(1, result.department, result.role, result.salary, result.firstName, result.lastName, result.manager);
      employeeLog.push(employee);
      mainMenu();
    })
};



//Update Role
const updateEmployeeRole = () => {
  /*How do I update role? */

};






mainMenu();



module.exports = db;