const mysql = require('mysql');
const dotenv = require('dotenv');
const uniqueString = require('unique-string');

let instance = null;
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.log(err.message);
    }
    // console.log('db ' + connection.state);
});


class DbService {
    static getDbServiceInstance() {
        return instance ? instance : new DbService();
    }

    async getAllData() {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = "SELECT * FROM task;";

                connection.query(query, (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });
            // console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    }


    async insertNewTask(task,user,phone,mail) {
        try {
            const id = uniqueString().toString();
            const insertTask = await new Promise((resolve, reject) => {
                const query = "INSERT INTO task ( Task, User_Name, Phone_Number, Mail,Id) VALUES (?,?,?,?,?);";

                connection.query(query, [task,user,phone ,mail,id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertTask);
                })
            });
            console.log(insertTask);
           
        } catch (error) {
            console.log(error);
        }
    }

    async deleteRowById(id) {
        try {
             
            const response = await new Promise((resolve, reject) => {
                const query = `DELETE FROM task WHERE id =`+ parseInt(id);
                console.log(query);
                connection.query(query, [id] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async updateTaskById(Id,Task) {
        //console.log('updateTaskById',Task);
        try {
            const response = await new Promise((resolve, reject) => {
                const query = `UPDATE task SET Task = '${Id}'  WHERE Id = '${Task}';`
                console.log(query);
                connection.query(query ,[Id, Task ], (err, result) => {
                    if (err) reject(new Error(err.message));
                    
                })
            });
    
            return response === 1 ? true : false;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async insertNewUser(user,permission,password) {
        try {
            const insertUser = await new Promise((resolve, reject) => {
                const query = "INSERT INTO user (  User_Name, Password,Permission) VALUES (?,?,?);";

                connection.query(query, [user,permission,password] , (err, result) => {
                    if (err) reject(new Error(err.message));
                    resolve(result.insertUser);
                })
            });
            console.log(insertUser);
           
        } catch (error) {
            console.log(error);
        }
    }
    async searchByName(name) {
        try {
            const response = await new Promise((resolve, reject) => {
                const query = `SELECT * FROM task WHERE name = ${name};`;

                connection.query(query, [name], (err, results) => {
                    if (err) reject(new Error(err.message));
                    resolve(results);
                })
            });

            return response;
        } catch (error) {
            console.log(error);
        }
    }
}
var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };
module.exports = DbService;