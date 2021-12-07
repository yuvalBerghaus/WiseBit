const express = require('express');
const cors = require('cors');
const { authRouter } = require('./routers/authRouter');
const app = express();
const port = process.env.PORT || 8080;

const logger = require('morgan');
app.use(logger('dev'));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/assets', express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');

app.use(cors({ origin: '*', credentials: true }))

app.get('/', (req, res) => {
    res.status(200).render('index', { title: 'Home' })
        //res.status(200).redirect('/api/auth/signin')
})

app.use('/api/auth', authRouter);

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(port, () => {
    console.log(`Listening on port ${ port }`);
});