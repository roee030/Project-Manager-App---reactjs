const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'taskManager';

MongoClient.connect(connectionURL, {useNewUrlParser: true ,useUnifiedTopology: true}, (error , client) => {
    if(error){
        return console.log('Unable to connect to database! ');
    }
    const db = client.db(databaseName)
    db.collection('tasks').insertOne({
        userName: 'Roee',
        PN: '0548336954',
        mail: 'Roee@gmail.com',
        date: '14.08.20'
    }, (error, result) => {
        if(error){
            return console.log('Unable to insert task');
        }
        console.log(result.ops);
    })
})