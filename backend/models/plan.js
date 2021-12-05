const Expense = require('./models/expense');
const mongoose = require('mongoose');
const schema = mongoose.Schema;

const planSchema = new mongoose.Schema({
    Username: String,
    Month: String,
    Year: Number,
    Expense: Expenses,
    Incomes: String,

})
const Plan = mongoose.model('Plan', planSchema)
module.exports = Plan;