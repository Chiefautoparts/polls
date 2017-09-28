const mongoose = require('mongoose');
const path = require('path');
const users = require('../controllers/user.js');
const polls = require('../controllers/poll.js')

module.exports = function(app){ 

    app.post('/login', function(req, res){
        users.login(req, res);
    });
    app.get('/get_curUser', function(req, res){
        users.get_curUser(req, res);
    });
    app.get('/logoff', function(req, res){
        users.logoff(req, res);
    });
    app.post('/create_poll', function(req, res){
        polls.create_poll(req, res);
    });
    app.get('/get_all_polls', function(req, res){
        polls.get_all_polls(req, res);
    });
     app.get('/get_one_poll', function(req, res){
        polls.get_one_poll(req, res);
    });

    app.get('*', (req, res) => {
       res.sendFile(path.resolve('./client/dist/index.html'));
   });
}

