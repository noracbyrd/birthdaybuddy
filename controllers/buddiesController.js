const db = require("../models");
module.exports = {
    findAll: function (req, res) {
        db.Buddy
            .find(req.query)
            .sort({ lastName: "desc" })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Buddy
            .findById({_id: req.params.id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByMonth: function (req, res) {
        db.Buddy
            .findById({month: req.params.month})
            .sort({day: "asc"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findByFirstName: function(req,res) {
        db.Buddy
            .find({firstName: req.params.firstName})
            .sort({lastName: "asc"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    findByLastName: function(req,res) {
        db.Buddy
            .find({firstName: req.params.lastName})
            .sort({lastName: "asc"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        db.Buddy
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Buddy
            .findOneAndUpdate({ _id: req.params.id }, {$push: req.body }, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // lets a user remove a buddy from active view, but keeps the record. sets "archive" from "false" to "true"
    remove: function (req, res) {
        db.Buddy
        .findOneAndUpdate({ _id: req.params.id }, {archive: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
