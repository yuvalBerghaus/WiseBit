const Categories = new Schema({
    uid: String,
    CategoryName: String,
    DesiredBudget: Number,
    Counter: Number,
})
const Category = model('Category', categorySchema)
module.exports = Category;