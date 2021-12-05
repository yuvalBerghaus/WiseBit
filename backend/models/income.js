const incomeSchema = new Schema({
    incomeFrom: String,
    amount: Number,
})
const Income = model('Income', incomeSchema)
module.exports = Income;