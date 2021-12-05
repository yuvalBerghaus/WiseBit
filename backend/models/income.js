const incomeSchema = new Schema({
    uid: String,
    incomeFrom: String,
    amount: Number,
})
const Income = model('Income', incomeSchema)
module.exports = Income;