const express = require('express');
const cors = require('cors');
const { authRouter } = require('./routers/authRouter');
const { categoryRouter } = require('./routers/categoryRouter');
const { userRouter } = require('./routers/userRouter');
const { pagesRouter } = require('./routers/pagesRouter');
const { pagesController } = require('./controllers/pagesController');
const app = express();
const port = process.env.PORT || 8080;

if(process.env.NODE_ENV === 'development') {
    const logger = require('morgan');
    app.use(logger('dev'));
}

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(cors({ origin: '*', credentials: true }))

app.use('/api/auth', authRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/users', userRouter);
app.get('/login', pagesController.login);
app.get('/logup', pagesController.logup);

app.use((req, res, next) => {
    if (req.headers.cookie) {
        const token = req.headers.cookie.split('=')[1];
        if (token) {
            // check here if there is user id that equals to this token
            // if no user id - redirect to login
            next();
        } else {
            res.status(200).render('signIn', { title: 'Sign In' });
        }
    } else {
        res.status(200).render('signIn', { title: 'Sign In' });
    }
});

app.use('/', pagesRouter);

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});