//Delegation / Differential Inheritance
//Factory Function using Object.create()
const proto = {
    fart() {
        return `${this.name} just farted a stinky!`
    },
    eat() {
        return `${this.name} is eating some plums`
    },
    sleep() {
        return `${this.name} is sleeping like a baby`
    }
}

//Concatenative Inheritance / Cloning / Mixins
//Cloning copies properties without retaining a reference between the two objects
const origin = {
    greeting: function greeting() {
        return `Hey, my name is ${this.name}. Nice to meet you.`
    }
};

const bot = Object.assign({},//New Object
origin, //Source for cloning properties,
{name: 'Bot'});

const msg = bot.greeting();

//Functional Inheritance
//Also uses factory functions and Concatenative Inheritance to add new properties
//Functions with the purpose of extending existing objects are referred to as Mixins

//Closures
//Closures give access to an outer function's scope from an inner function (lexical environment)

// const getSecret = (secret) => {
//     return {
//         get: () => secret
//     }
// }

// test('Closure for object privacy.', assert => {
//     const msg = '.get() should have access to the closure.';
//     const expected = 1;
//     const obj = getSecret(1);

//     const actual = obj.get();

//     try {
//         assert.ok(secret, 'This throws an error.');
//     } catch (e) {
//         assert.ok(true, 'The secret var is only available to privileged methods.');
//     }
//     assert.equal(actual, expected, msg)
//     assert.end();
// })

//Module Pattern
//The module pattern wraps a factory function in an IIFE
const calculator = (() => {
    const add = (a, b) => a+b;
    const sub = (a, b) => a-b;
    const mul = (a, b) => a*b;
    const div = (a, b) => a/b;
    return {
        add,
        sub,
        mul,
        div
    }
})();

//Classes
//Create many objects of the same kind - same as factory functions and constructors

class Product {
    constructor(name) {
        this.name = name;
    }

    category(){ //class method
    console.log(this.name);
    }
}
let produce = new Product('Apples');
//produce.category()
//This call creates a new object(1) and the constructor runs with the given argument and
//assigns it to this.name(2)

//A class is a kind of function
console.log(typeof Product) //function