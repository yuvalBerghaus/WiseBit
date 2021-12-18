const Expense = require('./models/expense');
const Counter = require('./models/counter');
const { Schema, model } = require('mongoose');
const userShema = new Schema({
    username: String,
    email: String,
    password: Number,
    desired_budget: Number,
    expenses: Expense,
    counters: Counter,
    allowed_budget: Budget
}, { collection: 'users' })
const User = model('User', userSchema)
module.exports = User;