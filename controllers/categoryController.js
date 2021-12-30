const Category = require('../models/categories');

exports.categoryController = {
    addCategory(req, res) {
        const { body } = req;

        const newCategory = new Category(body);
        const result = newCategory.save();

        if(result) {
            res.status(200).json({'success': 'Category added successfully'});
        } else {
            res.status(500).json({'error': 'Error saving a category'});
        }
    },
    getCategories(req, res) {
        Category.find({})
            .then(docs => res.status(200).json(docs))
            .catch(err => res.status(500).json({'error': `Error getting the data from db: ${err}`}));
    }
};