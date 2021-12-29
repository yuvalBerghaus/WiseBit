const jwt = require("jsonwebtoken");
const dayjs = require("dayjs");
const axios = require('axios');
const User = require('../models/user');

const isValidUserData = (body) => {
    return body.username && body.email && body.password && body.desired_budget;
};

exports.authController = {
    loginUser(req, res) {
        const { email, password } = req.body;
        //axios.get(`http://localhost:8080/api/users`)

        const token = user.id;
        res.cookie("access_token", token, {
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true,
            sameSite: process.env.NODE_ENV !== "development" ? "None" : "Lax",
            expires: dayjs().add(1, "hour").toDate()
        });

        res.status(200).send('Authenticated');
    },
    logupUser(req, res) {
        const { body } = req;
        if(!isValidUserData(body)) {
            res.status(400).json({'error': 'Missing parameters.'});
        } else {
            axios.get('http://localhost:8080/api/categories')
            .then(categories => {
                const expenses = categories.data.map(category => { 
                    return {
                        'category_id': category._id,
                        'amount_spent': 0
                    }         
                });

                const counters = categories.data.map(category => { 
                    return {
                        'category_id': category._id,
                        'count': 0
                    }         
                });

                const allowedBudget = categories.data.map(category => { 
                    return {
                        'category_id': category._id,
                        'sum': 0
                    }         
                });

                const newUser = new User({
                    'username': body.username,
                    'email': body.email,
                    'password': body.password,
                    'desired_budget': body.desired_budget,
                    'expenses': expenses,
                    'counters': counters,
                    'allowed_budget': allowedBudget
                });

                const promise = newUser.save();

                promise.then(result => {
                    const token = result.id;
                    res.cookie("access_token", token, {
                        secure: process.env.NODE_ENV !== "development",
                        httpOnly: true,
                        sameSite: process.env.NODE_ENV !== "development" ? "None" : "Lax",
                        expires: dayjs().add(1, "hour").toDate()
                    });
                    res.status(200).redirect('/');
                })
                .catch(() => {
                    res.status(500).json({'error': 'Error saving a user'});
                });
            })
            .catch((error) => {
                res.status(500).json({'error': 'Error getting categories'});
            });
        }
    },
    logout(req, res) {
        res.clearCookie("access_token");
        res.status(200).redirect('/signIn');
    }
};