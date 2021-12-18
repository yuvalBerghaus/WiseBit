const Categories = new Schema({
    category_id: String,
    category_name: String,
})
const Category = model('Category', categorySchema)
module.exports = Category;