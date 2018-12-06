var models = require('../models');
var mySqlConnection = require('../db');


//server 
module.exports = {
  messages: {
    get: function (req, res) {
      mySqlConnection.query('SELECT * FROM messages', (err, rows, fields) => {
        if (!err) {
          console.log(rows);
        } else {
          console.log(err);
        }
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      //change from username later
      var queryName = req.body;
      mySqlConnection.query('INSERT queryName INTO messages', (error, result) => {
        if (error) {
          console.log("POST ERROR");
          throw ('we r throwing error');
        }
        console.log("NO ERROR POST IS WORKING");
        return;
      })
      res.end('yay');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

