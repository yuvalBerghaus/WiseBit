const Categories = new Schema({
    CategoryName: String,
    DesiredBudget: Number,
    Counter: Number,
})
const Category = model('Category', categorySchema)
module.exports = Category;