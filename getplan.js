const sum = (accumulator, curr) => accumulator + curr;

const getPlan = (countersPerCategory, desiredBudget) => {
    const countersSum = countersPerCategory.reduce(sum);
    const proportions = countersPerCategory.map(counter => counter/countersSum);

    return proportions.map(proportion => (Number)((proportion * desiredBudget).toFixed(2)));
}

const expensesPerCategory = [400, 1058, 4000, 18, 33];
const countersPerCategory = [2, 48, 24, 3, 1];
const desiredBudget = 1900;

const allowedBudgetPerCategory = getPlan(countersPerCategory, desiredBudget);

console.log('Actual budget : ' + expensesPerCategory.reduce(sum));
console.log('Desired budget: ' + desiredBudget)
console.log('Counters: %O', countersPerCategory);
console.log('Expenses: %O' , expensesPerCategory);
console.log('Allowed : %O ', allowedBudgetPerCategory);



