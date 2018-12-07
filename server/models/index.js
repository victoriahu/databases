var db = require('../db');

//client 

module.exports = {
  messages: {
    get: function (cb) {}, // a function which produces all the messages
    post: function (req, res) {
      db.post('queryName', (error, result) => {
        if (error) {
          console.log("POST ERROR");
          throw ('we r throwing error');
        }
        console.log("NO ERROR POST IS WORKING");
        return;
      })
      res.end('yay');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

