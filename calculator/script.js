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
console.log(storage)

//Show numbers in display
const display = document.querySelector('.display');
const numBlock = document.querySelectorAll('.num');

function displayNum(e) {
     let number = parseInt(e.target.textContent);
     display.append(number)
     storage.push(number)
     console.log(storage)
        //Push all digits as a single number into array until operator is clicked
        //Or use operator as split point in array
};
numBlock.forEach(button => button.addEventListener('click', displayNum))

//Show operators in display
const operators = document.querySelectorAll('.operator');

function displayOperator(e){
    let op = e.target.textContent;
    display.append(e.target.textContent);
    storage.push(op)
    console.log(storage)
}       //When operator is clicked, push op to array and make way for next number
operators.forEach(button => button.addEventListener('click', displayOperator))

function storeInput(input) {
    let storage = [];
   
    console.log(storage)
}
//The storage array now adds each input as a single value
//The operators could act as a split point to join digits to values
//[1, 4, 2, '-', 2, 3] >>> [142, '-', 23]








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