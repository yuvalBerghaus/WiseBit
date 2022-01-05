const User = require('../models/user');

exports.userController = {
    getUsers(req, res) {
        User.find({})
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({'error': `Error getting the data from db: ${err}`}));
    },
    getUser(req, res) {
        const userId = req.params.userId;
        User.findOne({_id: userId})
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({'error': 'Error getting the data from db'}));
    }
};