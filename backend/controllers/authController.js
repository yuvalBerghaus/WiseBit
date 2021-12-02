const users = require('../models/users.json');

const findUser = async (email, password) => {
    const user = await users.find(user => (user.email === email)&&(user.password === password));
    if(user) {
        return user;
    } else {
        return null;
    }
};

exports.authController = {
    loginUser(req, res) {
        const { email, password } = req.body;
        findUser(email, password)
            .then(user => {
                if(user) {
                    res.status(200).json(user);
                } else {
                    res.status(200).json({'error':'unauthorized'});
                }
            })
    }
};