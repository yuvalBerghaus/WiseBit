exports.pagesController = {
    index(req, res) {
        res.status(200).render('index', { title: 'Home', home: 'selected', expenses: '', chart: '' });
    },
    login(req, res) {
        res.status(200).render('signIn', { title: 'Sign In' });
    },
    logup(req, res) {
        res.status(200).render('signUp', { title: 'Sign Up' });
    },
    form(req,res){
        console.log(req.headers.cookie.split('=')[1]);
        res.status(200).render('form', { title: 'Add Expense', home: '', expenses: 'selected', chart: '' });
    },
    charts(req,res){
        console.log(req.headers.cookie.split('=')[1]);
        res.status(200).render('charts', { title: 'Chart', home: '', expenses: '', chart: 'selected' });
    }
}; 