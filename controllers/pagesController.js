exports.pagesController = {
    index(req, res) {
        // console.log(req.headers.cookie.split('=')[1]);
        res.status(200).render('index', { title: 'Home' });
    },
    login(req, res) {
        res.status(200).render('signIn', { title: 'Sign In' });
    },
    logup(req, res) {
        res.status(200).render('signUp', { title: 'Sign Up' });
    },
    form(req,res){
        res.status(200).render('form', { title: 'form' });
    }
}; 