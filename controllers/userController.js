const User = require('../models/user');
const axios = require('axios');
const {updateAllowedBudjet} = require('../advisor');
const { render } = require('express/lib/response');
exports.userController = {
    getUsers(req, res) {
        User.find({})
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({ 'error': `Error getting the data from db: ${err}` }));
    },
    getUser(req, res) {
        const userId = req.params.userId;
        console.log(userId)
        User.findOne({ _id: userId })
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({ 'error': 'Error getting the data from db' }));
    },
    updateUsers(req, res) {
        const userId = req.headers.cookie.split('=')[1];
        const categoryId = req.body.categoryId;
        const price = req.body.price;
        axios(`http://localhost:8080/api/users/${userId}`)
            .then(object => {
                let expenses = object.data.expenses;
                let counter = object.data.counters;
                const newExpenses = expenses.map(expense => {
                    if (expense.category_id == categoryId) {
                        expense.amount_spent += price;
                    }
                    return expense;
                })
                const newCounter = counter.map(count => {
                    if (count.category_id == categoryId) {
                        count.count++;
                    }
                    return count;
                })
                User.updateOne({ _id: userId }, { expenses: newExpenses, counters: newCounter})
                    .then(docs => {
                        updateAllowedBudjet(userId);
                        res.status(200); res.json(docs);

                    })
                    .catch(err => { res.status(400); res.json(`Error updating the data from db: ${err}`);res.render('index', { title: 'Home' }); });
            });
            

    }
};