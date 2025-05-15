const expenses = { "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 }

const addAllExpenses = function(expenses) {
    let total = 0
    for (const expense in expenses) {
        total += expenses[expense]
    }
    return total
}
console.log(addAllExpenses(expenses))

module.exports = {addAllExpenses}