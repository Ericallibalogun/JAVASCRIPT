const createMathOperations = function (num1, num2){
    return {
        add: function () {
            return num1 + num2;
        },
        subtract: function () {
            return num1 - num2;
        },
        divide: function () {
            return num1 / num2;
        },
        multiply: function () {
            return num1 * num2;
        }
    }
}
const math = createMathOperations(2,6);
module.exports = {createMathOperations}


