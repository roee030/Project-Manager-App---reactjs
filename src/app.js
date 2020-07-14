const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.listen(process.env.PORT, () => console.log('App is running'));

//create 
app.post('/insert', (request, response) => {
    const { Task, User_Name, Phone_Number,Mail} = request.body;
    const db = dbService.getDbServiceInstance();
    const result = db.insertNewTask( Task, User_Name, Phone_Number,Mail);
    result
    .then(data => response.json({success: true}))
    .catch(err => console.log(err))
})


//read
app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})
//update
app.patch('/update', (request, response) => {
    const { Task ,Id} = request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.updateTaskById(Task, Id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});
//delete
app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowById(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});
//register
app.post('/insertUser', (request, response) => {
    const { User_Name,Password,Permission} = request.body;
    const db = dbService.getDbServiceInstance();
    const result = db.insertNewUser(  User_Name, Password,Permission);
    result
    .then(data => response.json({success: true}))
    .catch(err => console.log(err))
})

//search task by name
app.get('/search/:name', (request, response) => {
    const { name } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.searchByName(name);
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})