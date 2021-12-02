const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Plan = require('./models/plan');
// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = 'mongodb+srv://kayuse:NDPAQGXcgzTedNHr@cluster0.1ktor.mongodb.net/WiseBit?retryWrites=true&w=majority';
const http = require('http');
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));
// app.get('/add-plan', (req, res) => {
//     const plan = new Plan({
//         Username: 'yuval',
//         Month: '312312',
//         Year: '123123',
//     })
//     plan.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })