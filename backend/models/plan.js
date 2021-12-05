const Expense = require('./models/expense');
const { Schema, model } = require('mongoose');
const planSchema = new Schema({
    Username: String,
    Month: String,
    Year: Number,
    Expense: Expenses,
    Incomes: String,

}, { collection: 'plan' })
const Plan = model('Plan', planSchema)
module.exports = Plan;