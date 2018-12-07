var models = require('../models');
var mySqlConnection = require('../db');


//server 
module.exports = {
  messages: {
    get: function (req, res) {
      mySqlConnection.query('SELECT * FROM messages', (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
            console.log("ABLOOGA");
            res.send(JSON.stringify(rows));

        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //change from username later
      let mes = req.body;
      console.log("THIS IS OUR REQUEST", req.body);
      // console.log("THIS IS OUR res", res);

      //need other roomid, etc.

      var sql = "INSERT INTO messages (text) VALUES (?)";
      // var sql = "SET @messageid = ?; SET @text = ?; SET @roomid = ?; SET @userid = ?; \
      // CALL MessagesAdd(@messageid, @text, @roomid, @userid);"
      mySqlConnection.query(sql, [mes.text], (error, rows, fields) => {
      // mySqlConnection.query("INSERT INTO messages (text) VALUES ('BIG YIKES')", (error, rows) => {
        if (!error) {
          // console.log(req);
          console.log("this is workinngggg");
          res.send(rows);
          console.log("messages post has no error");
          console.log(mes);
          
          // throw ('we r throwing error');
        } else {
          console.log("THIS IS ", error);
        }
        res.end('yay');
      })
      
     // a function which handles posting a message to the database
  }
},
  
  users: {
    // Ditto as above
    get: function (req, res) {
      mySqlConnection.query('SELECT * from users', (err, rows, fields) => {
        if (!err) {
          console.log(rows);
        } else {
          console.log(err);
        }
      })
    },
    post: function (req, res) {
      let usr = req.body;
      console.log(usr);
      var sql = "INSERT INTO users (username) VALUES (?)";

      mySqlConnection.query(sql, [usr.username], (error, rows, fields) => {
        if (!error) {
          console.log(rows);
          res.send(rows);
        } else {
          console.log("users is having an error", error);
        }
        res.end('yyay');
      })
    }
  }
};