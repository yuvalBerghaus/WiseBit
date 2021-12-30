const { Schema, model } = require('mongoose');

const categorySchema = new Schema({
    name: String,
}, { collection: 'categories' })

const Category = model('Category', categorySchema)

module.exports = Category;