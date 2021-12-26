const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    desired_budget: Number,
    expenses: [
        {
            category_id: {
                type: Schema.Types.ObjectId,
                ref: 'Category'
            },
            amount_spent: Number
        }
    ],
    counters: [
        {
            category_id: {
                type: Schema.Types.ObjectId,
                ref: 'Category'
            },
            count: Number
        }
    ],
    allowed_budget: [
        {
            category_id: {
                type: Schema.Types.ObjectId,
                ref: 'Category'
            },
            sum: Number
        }
    ]
}, { collection: 'users' })

const User = model('User', userSchema)

module.exports = User;