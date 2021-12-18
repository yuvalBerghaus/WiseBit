const Expenses = new Schema({
    category_id: String,
    amount_spent: Number,
})
const Expense = model('Expense', expenseSchema);
module.exports = Expense;