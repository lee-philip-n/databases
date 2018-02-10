var db = require('../db');

module.exports = {
  // a function which produces all the messages
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', (err, rows) => {
        if (err) {
          callback(err);
        }
        console.log('models message get rows: ', rows);
        callback(null, rows);
      });
    }, 
    // a function which can be used to insert a message into the database
    post: function (message, callback) {

      db.query('INSERT IGNORE INTO users (username) values(?)', [message.username], (err, userResults) => {
        if (err) {
          throw err;
        }
        db.query('INSERT IGNORE INTO rooms (roomname) values(?)', [message.roomname], (err, roomResults) => {
          if (err) {
            throw err;
          }
          db.query('INSERT INTO messages (userId, message, roomId) values(?, ?, ?)', [1, message.message, 1], (err, messageResults) => {
            if (err) {
              throw err;
            }
            callback();
          });
        });
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
          if (err === 'ER_DUP_ENTRY') {
            callback(err);
          } 
        }
        callback();
      });
    }
  }
};




