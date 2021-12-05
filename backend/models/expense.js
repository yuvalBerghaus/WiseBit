const Expenses = new Schema({
    uid: String,
    CategoryName: String,
    amountSpent: Number,
})
const Expense = model('Expense', expenseSchema);
module.exports = Expense;