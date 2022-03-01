
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

// const calculator = {
//     value: 0,
//     firstNum: null,
//     secondNum: false,
//     operator: null
// };

function calculate(num1, num2, operator){
    let calculation = CALCULATIONS.find(el => operator === el.name);
    return calculation.calc(num1, num2)
}

const display = document.querySelector('.display');
const numBlock = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operator');

let numbers = [];
let operator = []

numBlock.forEach(button => button.addEventListener('click', (e) => {
    display.append(e.target.textContent);    
}))

operators.forEach(button => button.addEventListener('click', (e) => {
    numbers.push(display.textContent)
    operator.push(e.target.textContent)
    display.textContent = '';
    console.log(numbers, operator)
    if(e.target.textContent === '=') {
      display.textContent = calculate(numbers[0], numbers[1], operator[0]);
      numbers = []
      operator = []
    }
    console.log(numbers)
}))