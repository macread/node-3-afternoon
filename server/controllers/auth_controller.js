const users = require('../models/users');

var id = 1;

module.exports = {
    login: (req, res, next) => {
        const {username, password} = req.body;
        let idx = users.findIndex((user)=>{
            user.username === username && user.password === password
        })
        idx>=0 ? 
            (req.session.username = username,
            res.status(200).send(req.session.user)) 
            :
            res.status(500)

    },

    register: (req, res, next) => {
        newUser = {
            id: id,
            username: req.body.username,
            password: req.body.password
        }
         user.push(newUser);
         id++;
         req.session.user = req.body.username;
         res.status(200).send(req.session);
    },
       


    signout: (req, res, next) => {
        req.session.destroy();
        res.status(200).send(req.session);
    },

    getuser: (req, res, next) => {
        res.status(200).send(req.session);
    },
}