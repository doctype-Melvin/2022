
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
const equals = document.querySelector('#equals').textContent

let displayValue = display.textContent;
let num1 = '';
let num2 = '';
let operator = '';
let stopAppending = false;
let period = ''
let result = null;
let numberLength = null;

//Numblock event listeners
numBlock.forEach(button => button.addEventListener('click', (e) => {
    let num = e.target.textContent;
    appendNum(num);
}));

//Operator keys event listeners
operators.forEach(button => button.addEventListener('click', (e) => {
    let op = e.target.textContent;
    if(operator === '') { //Store display value to num1 when operator is clicked
        num1 = displayValue;
        operator = op;
        displayValue = '0'
    } else if (op === equals) { //Store display value to num2 when '=' is clicked and call fn
        num2 = displayValue;
        result = calculate(num1, num2, operator).toString();
        display.textContent = result;
        num1 = result;
        displayValue = result;
        operator = '';
        num2 = '';
    } else if (op !== equals) { //Repeats the first two steps as long as '=' is not being clicked
        stopAppending = false;
        num2 = displayValue;
        result = calculate(num1, num2, operator).toString();
        operator = op;
        display.textContent = result;
        num1 = result;
        displayValue = '0';
    }
}));

//Delete Key
const delKey = document.querySelector('.delete');
delKey.addEventListener('click', () => {
    display.textContent = displayValue.slice(0, -1);
    displayValue = display.textContent;
    if (displayValue.length === 0) display.textContent = '0';
    numberLength = display.textContent.length;
    limitInput(numberLength);
})

//All-clear key
const acKey = document.querySelector('.clear');
acKey.addEventListener('click', () => {
    displayValue = '0';
    display.textContent = 0;
    num1 = '';
    num2 = '';
    operator = '';
    period = '';
    stopAppending = false;
    console.clear()
})

//Decimal key
const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
    if (displayValue.includes('.')) return
    period = '.'
    appendNum(period)
})

//Function to populate the display with numbers
function appendNum(number) {
    if(stopAppending) return
    if(displayValue === '0') {
        displayValue = number;
        display.textContent = displayValue;
    }else if (displayValue !== '0') {
        displayValue = displayValue+number;
        display.textContent = displayValue;
    }
    numberLength = display.textContent.length
    limitInput(numberLength)
}

//Function to limit number input
function limitInput(length){
    if (length >= 13) {
        stopAppending = true;
    }
    if (length < 13) {
        stopAppending = false;
    }
}

//Function to round decimal



//When result is displayed, disable input/stop appending numbers