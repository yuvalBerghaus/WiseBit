exports.authController = {
    getSignIn(req, res) {
        res.status(200).render('signIn', { title: 'Sign In' });
    },
    getSignUp(req, res) {
        res.status(200).render('signUp', { title: 'Sign Up' });
    }
};