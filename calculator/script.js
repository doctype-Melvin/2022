const OPERATORS = [
    {
        operator: '+',
        name: 'add',
        key: 171,
        calc: function(num1, num2) {
            return num1 += num2
        }
    },
    {
        operator: '-',
        name: 'subtract',
        key: 173,
        calc: function(num1, num2) {
            return num1-num2
        }
    },
    {
        operator: '*',
        name: 'multiply',
        key: 171,
        calc: function(num1, num2) {
            return num1*num2
        }
    },
    {
        operator: '/',
        name: 'divide',
        key: 55,
        calc: function(num1, num2) {
            return num1/num2
        }
    }
]

function operate(operator, num1, num2) {
    let operation = OPERATORS.find(element => operator === element.operator)
    return operation.calc(num1, num2)
}

// function add(num1, num2) {
//     let result = num1 += num2;
//     return result
// }

// function subtract(num1, num2) {
//     return num1-num2
// }

// function multiply(num1, num2) {
//     return num1*num2
// }

// function divide(num1, num2) {
//     return num1/num2
// }