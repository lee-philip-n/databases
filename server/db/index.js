var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "student", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;