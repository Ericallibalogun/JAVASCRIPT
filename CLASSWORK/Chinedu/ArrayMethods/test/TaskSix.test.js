const {addAllExpenses} = require('../taskSix')

test("Add all expeses",() =>{
    const expenses =  { "groceries": 150, "dining out": 100, "transportation": 50, "entertainment": 80 }
    const expected = 380
    const result = addAllExpenses(expenses)

})