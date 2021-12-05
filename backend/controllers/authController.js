exports.authController = {
    getSignIn(req, res) {
        res.status(200).sendFile('../index.js', { root: __dirname });
    },
    getSignUp(req, res) {
        res.status(200).sendFile('../signUp.js', { root: __dirname });
    }
};