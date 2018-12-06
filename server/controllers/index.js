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
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

