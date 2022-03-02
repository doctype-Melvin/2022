
const CALCULATIONS = [
    {
        name: '+',
        calc: function (num1, num2){
            return num1*1+num2*1
        }
    },
    {
        name: '-',
        calc: function(num1, num2){
            return num1 - num2
        }
    },
    {
        name: '*',
        calc: function(num1, num2){
            return num1*num2
        }
    },
    {
        name: '/',
        calc: function(num1, num2){
            return num1/num2
        }
    }
];

function calculate(num1, num2, operator){
    let calculation = CALCULATIONS.find(el => operator === el.name);
    return calculation.calc(num1, num2)
}

const display = document.querySelector('.display');
const numBlock = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('#equals').textContent

let displayValue = display.textContent
let num1 = '';
let num2 = '';
let operator = '';

//Numblock event listeners

numBlock.forEach(button => button.addEventListener('click', (e) => {
    let num = e.target.textContent;
    appendNum(num);
}));

//Operator keys event listeners
operators.forEach(button => button.addEventListener('click', (e) => {
    let op = e.target.textContent;
    if(operator === '') {
        num1 = displayValue;
        operator = op;
        displayValue = '0'
    } else if (op === equals) {
        num2 = displayValue;
        let result = calculate(num1, num2, operator).toString();
        display.textContent = result;
        num1 = result;
        displayValue = result;
        operator = '';
        num2 = '';
     }
}));

//All-clear key
const acKey = document.querySelector('.clear');
acKey.addEventListener('click', () => {
    displayValue = '0';
    display.textContent = 0;
    num1 = '';
    num2 = '';
    operator = '';
    console.clear()
})

//Function to populate the display with numbers
function appendNum(number) {
    if(displayValue === '0') {
        displayValue = number;
        display.textContent = displayValue;
    }else if (displayValue !== '0') {
        displayValue = displayValue+number;
        display.textContent = displayValue;
    }
}



//When inputs are set, the next operator calculates the result & starts new operation
//When result is displayed, disable input/stop appending numbers