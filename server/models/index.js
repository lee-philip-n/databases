var db = require('../db');

module.exports = {
  // a function which produces all the messages
  messages: {
    get: function (callback) {
      db.query('SELECT message from mesages INNER JOIN users, rooms ON users.id = message.userId AND rooms.id = message.roomId', (err, rows) => {
        if (err) {
          throw err;
        }
        console.log('models message get rows: ', rows);
        callback(err, rows);
      });
    }, 
    // a function which can be used to insert a message into the database
    post: function (message, callback) {
      console.log('message', message);
      db.query('INSERT INTO messages (message) values(?)', [message], (err) => {
        if (err) {
          throw err;
        }
        callback();
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT username from users', (err, rows) => {
        if (err) {
          throw err;
        }
        console.log('models user get rows: ', rows);
        callback(rows);
      });
    },
    post: function (user, callback) {
      console.log('user', user);
      db.query('INSERT INTO users (username) values(?)', [user.username], (err) => {
        if (err) {
          throw err;
        }
        callback();
      });
    }
  }
  
  
};

