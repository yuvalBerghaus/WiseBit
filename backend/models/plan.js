const Expense = require('./models/expense');
const Incomes = require('./models/income');
const { Schema, model } = require('mongoose');
const planSchema = new Schema({
    Date: String,
    Expense: [Expenses],
    Income: [Incomes],
    desiredSavings: Number,
}, { collection: 'plan' })
const Plan = model('Plan', planSchema)
module.exports = Plan;