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

//Show numbers in display
const display = document.querySelector('.display');
const numBlock = document.querySelectorAll('.num');

function displayNum(e) {
     let number = parseInt(e.target.textContent);
     display.append(number)
};
numBlock.forEach(button => button.addEventListener('click', displayNum))

//Show operators in display
const operators = document.querySelectorAll('.operator');

function displayOperator(e){
    display.append(e.target.textContent)
}
operators.forEach(button => button.addEventListener('click', displayOperator))

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