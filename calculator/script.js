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

//Function looks up the corresponding operator array object
function operate(operator, num1, num2) {
    let operation = OPERATORS.find(element => operator === element.operator)
    return operation.calc(num1, num2)
}

//Selectors for operator buttons
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');

//Selectors for other buttons
const backspace = document.querySelector('.backspace');
const clear = document.querySelector('.clear');
const equals = document.querySelector('.equals');

//Selector for numblock
const num = document.querySelectorAll('.num');

//Selector for display
const display = document.querySelector('.display');

//Other variables
let operator = '';
let num1 = null;
let num2 = null;
let displayValue = 0;
let storage = [];