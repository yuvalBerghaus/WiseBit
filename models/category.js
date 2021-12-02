const Categories = new Schema({
    CategoryName: String,
    SubCategory: [subCategories],
    amountSpent: Number,
    budget: Number,
    priorityPercent: String,
})