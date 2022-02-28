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