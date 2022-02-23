const OPERATORS = [
    {
        operator: '+',
        name: 'add',
        key: 171
    },
    {
        operator: '-',
        name: 'subtract',
        key: 173
    },
    {
        operator: 'x',
        name: 'multiply',
        key: 171
    },
    {
        operator: '/',
        name: 'divide',
        key: 55
    }
]

function operate(operator, num1, num2) {
    
}

function add(num1, num2) {
    let result = num1 += num2;
    return result
}

function subtract(num1, num2) {
    return num1-num2
}

function multiply(num1, num2) {
    return num1*num2
}

function divide(num1, num2) {
    return num1/num2
}