const db = require("../models");

module.exports = {
    addUser: function(req, res){
        db.User
            .create(req.body)
            .then(res.redirect("/login"))
            .catch(err => res.status(422).json(err));
    }
};