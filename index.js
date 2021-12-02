const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://kayuse:<password>@cluster0.1ktor.mongodb.net/WiseBit?retryWrites=true&w=majority";
const http = require('http');
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

// const server = http.createServer((req, res) => {
//     console.log('request made');
// });

// // localhost is the default value for 2nd argument
// server.listen(3000, 'localhost', () => {
//     console.log('listening for requests on port 3000');
// });