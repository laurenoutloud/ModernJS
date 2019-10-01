/* Variables & Declarations */

//var, let, const

var name = 'John Doe';
console.log(name);
 name = 'Steve';
 console.log(name);

 //Initialize a variable
 var greeting; //sets to undefined
 console.log(greeting);
 greeting = 'hello';
 console.log(greeting);

 // letters, numbers, _,  $
 //Can't start with a number
 //gives error var 1name = 'John'; 
 //_ is global for private variables

 //Multi word = camel casing
 var firstName = 'John'; //Camel Casing *recommended*
 var FirstCase = 'Joe'; //Pascal Case

 let nameLet = 'Sarah';
 console.log(nameLet);
 nameLet = 'Sue';
 console.log(nameLet);

 //CONST cant change or be reassigned
 const dog = 'Spot'; //value has to be assigned
 console.log(dog);
 //dog = 'Lucky'; throws TypeError

 //CONST objects - variables can be changed but object can't be reassigned
 const person = {
     name: 'John',
     age: 30
 }
 console.log(person);
 person.name = 'Bill';
 console.log(person);

 //CONST arrays - can be mutated but not reassigned
 const numbers =[1,2,3,4,5];
 console.log(numbers);
 numbers.push(6);
 console.log(numbers);