const mongoose = require('mongoose');
const User = mongoose.model('User');
const Poll = mongoose.model('Poll');

module.exports = {
    
    login: function(req, res){
        let curUser = new User();
        curUser.name = req.body.name;
         
        User.findOne({ name: curUser.name.toLowerCase() })
            .then(data => { 
                if(data === null){ 
                    curUser.save();
                    req.session.user_id = curUser._id;
                    res.status(200).json(curUser);
                } else {
                    data.name = curUser.name;
                    data.save();
                    req.session.user_id = data._id;
                    res.status(200).json(data);
                }
            })
            .catch(err => {
                res.status(599).json(err);
            });
    },
    get_curUser: function(req, res){
        if(req.session.user_id){
            res.status(200).json(req.session.user_id);
        } else {
            res.status(501).json(err);
        }
    },

    logoff: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },

};


