const Expense = require('./models/Categories');
const Expenses = new Schema({
    Category: [Categories],
    totalExpense: String,
})
