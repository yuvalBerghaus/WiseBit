const Expenses = new Schema({
    CategoryName: String,
    amountSpent: Number,
})
const Expense = model('Expense', expenseSchema)
module.exports = Expense;