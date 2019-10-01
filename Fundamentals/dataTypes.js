/* Data Types */

//Primative
//stored directly in laction variable access
//stored on the stack
//String, Number, Boolean, Null, Undefined, Symbols

//Reference
//Accessed by reference
//Objects that are stored on the heap
//A pointer located in memory

//PRIMITIVE
//String
const name = 'John Doe';
//Number
const age = 45;
//Bool
const hasDog = true;
//Null
const car = null;
//Undefined
let test;
//Symbol
const sym = Symbol();

console.log(typeof name);
console.log(typeof age);
console.log(typeof hasDog);
console.log(typeof car); //null is not an object but you'll get object back
console.log(typeof test);
console.log(typeof sym);


//REFERENCE - Objects
//Array
const hobbies = ['movies', 'music'];
//Object Literal
const address = {
    city: 'Miami',
    state: 'FL'
};
//Date
const today = new Date();
console.log(today);
console.log(typeof today);
