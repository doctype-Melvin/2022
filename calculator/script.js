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
        //Add backspace, clear, equals 
    }
]

//Function looks up the corresponding operator array object
function operate(operator, num1, num2) {
    let operation = OPERATORS.find(element => operator === element.operator)
    return operation.calc(num1, num2)
}

//Storage for input
let storage = []

//Show numbers in display
const display = document.querySelector('.display');
const numBlock = document.querySelectorAll('.num');

function displayNum(e) {
    let number = parseInt(e.target.textContent);
    display.append(number)
    storage.push(number)
    console.log(storage)
};
numBlock.forEach(button => button.addEventListener('click', displayNum))

//Convert array elements to number
const operators = document.querySelectorAll('.operator');
//let op = e.target.textContent;

function processStorage(){
    let number = parseInt(storage.join(''));
    storage = [];
    return number
}       
operators.forEach(button => button.addEventListener('click', processStorage));

function clearDisplay() { 
    display.textContent = '';
    storage = []
}
clearDisplay()

const clear = document.querySelector('.clear');
clear.addEventListener('click', clearDisplay)







//Keydown to trigger displayNum
// window.addEventListener('keydown', (e) => {
//     console.log(e)
// })



// Looking for keyCode? Use this function
// function test(){
//     window.addEventListener('keydown', (e) => {
//         console.log(e)
//     })
// }
// test()