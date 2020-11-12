// const myModule = require('./myModule.js');
const {add, subtract, addAgain} = require('./myModule.js');
let name = 'Andrew';

function printName(person) {
    return `Hello, ${person}`;
};

// console.log(myModule.beBasic());
console.log(add(5, 50));
console.log(subtract(10, 20));
console.log(addAgain(27, 5913));
