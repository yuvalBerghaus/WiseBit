const User = require('./models/user');

const sum = (accumulator, curr) => accumulator + curr;

const getPlan = (countersPerCategory, desiredBudget) => {
    const countersSum = countersPerCategory.reduce(sum);
    const proportions = countersPerCategory.map(counter => counter/countersSum);

    return proportions.map(proportion => (Number)((proportion * desiredBudget).toFixed(2)));
}

exports.updateAllowedBudget = async (userId) => {
    await User.findOne({_id: userId})
    .then(user => {
        const desiredBudget = user.desired_budget;
        const counters = user.counters.map(counter => counter.count);
        const allowedBudgetArray = getPlan(counters, desiredBudget);
        user.allowed_budget = user.allowed_budget.map((budget, index) => {
            return {
                'category_id': budget.category_id,
                'sum': allowedBudgetArray[index]
            }
        })

        User.updateOne({_id: userId}, user)
        .then(() => true)
        .catch(() => false)
    })
    .catch(() => false);
}
