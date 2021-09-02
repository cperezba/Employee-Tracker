function addDepartmentSQL(db, newDepartment) {
    const sql = `INSERT INTO department (name) VALUES (?)`;
    const params = [newDepartment];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
        }
    })
};

// function addRoleSQL(db, title, salary, departmentName) {
//     let sql = `INSERT INTO role (title) VALUE (?)`;
//     let params = [title];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//     })


//     sql = `INSERT INTO role (salary) VALUE(?)`;
//     params = [salary];
//     db.query(sql, params, (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//     })


//     sql = `INSERT INTO role (department_id) VALUE(?)`;
//     params = [departmentName];
//     db.query(sql, params, (err, result) => {
//         if (err) {
//             console.log(err);
//         }
//     })
// };




module.exports = { addDepartmentSQL };