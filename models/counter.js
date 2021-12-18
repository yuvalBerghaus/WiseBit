const counterSchema = new Schema({
    category_id: Number,
})
const Counter = model('Counter', counterSchema);
module.exports = Counter;