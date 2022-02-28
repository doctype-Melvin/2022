const calculator = {
    value: 0,
    firstNum: null,
    secondNum: false,
    operator: null
};

const CALCULATIONS = [
    {
        name: '+',
        calc: function (num1, num2){
            return num1+=num2
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

function updateDisplay(){
    display.textContent = calculator.value
}
updateDisplay()

numBlock.forEach(button => button.addEventListener('click', (e) => {
    console.log(e.target.textContent)
}))