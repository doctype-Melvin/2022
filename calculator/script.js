const OPERATIONS = [
    {
        operator: '+',
        calc: function (num1, num2){
            return num1+=num2
        }
    },
    {
        operator: '-',
        calc: function(num1, num2){
            return num1 - num2
        }
    },
    {
        operator: '*',
        calc: function(num1, num2){
            return num1*num2
        }
    },
    {
        operator: '/',
        calc: function(num1, num2){
            return num1/num2
        }
    }
]