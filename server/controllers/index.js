var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) { 
      models.messages.get((err, data) => {
        console.log('Ctrl message get data: ', data);
        res.json(data);
      });
    },

    // a function which handles posting a message to the database
    post: function (req, res) {
      let data = req.body;
      console.log('Ctrl message post data: ', data);
      models.messages.post(data, (err) => {
        if (err) {
          throw err;
        }
        res.send('Ctrl message post: works!');
      });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((data) => {
        console.log('Ctrl get user data: ', data);
        res.json(data);
      });
    },
    
    post: function (req, res) {
      let data = req.body;
      console.log('Ctrl users post data: ', data);
      models.users.post(data, (err)=> {
        if (err) {
          res.send('username already exists');
        }
        res.send('Ctrl user post: works!');
      });
    }
  }
};

