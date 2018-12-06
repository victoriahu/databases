var mysql = require('mysql');


// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var mySqlConnection = mysql.createConnection({
    // host: 'localhost', 
    user: 'student', 
    password: 'student', 
    database: 'chat',
    multipleStatements: true
});


//passed in database as second argument
mySqlConnection.connect((err, database) => {
    if (!err) {
        console.log('DB connection succeeded');
        console.log(database);
    } else {
        console.log('DB connection failed: ' + JSON.stringify(err, undefined, 2));
    }
})

//inserted module exports, didn't do anything
module.exports = mySqlConnection;