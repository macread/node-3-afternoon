const swag = require('../models/swag');

module.exports = {
    add: (req, res, next) => {
        let {cart} = req.session.user;
        let idx = cart.findIndex( item => item.id === req.query.id);
        if (idx < 0) {
            let swagItem = swag.find( swagItem => swagItem.id === req.query.id);
            cart.push(swagItem)
            req.session.user.total += swagItem.price;
        }
        res.status(200).send(req.session.user);
    },

    delete: (req,res, next) =>{
        let {cart} = req.session.user;
        let swagItem = swag.find( swagItem => swagItem.id === req.query.id);

        let idx = cart.findIndex( item => item.id === req.query.id);
        cart.splice(idx,1);
        req.session.user.total -= swagItem.price;

        res.status(200).send(req.session.user);
    },

    checkout: (reg, res, next) => {
        req.session.user.cart=[];
        req.session.user.total=0;
        res.status(200).send(req.session.user);
    }
}