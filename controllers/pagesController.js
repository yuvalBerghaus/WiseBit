exports.pagesController = {
    index(req, res) {
        res.status(200).render('index', { title: 'Home' });
    },
    login(req, res) {
        res.status(200).render('signIn', { title: 'Sign In' });
    },
    logup(req, res) {
        res.status(200).render('signUp', { title: 'Sign Up' });
    }
};