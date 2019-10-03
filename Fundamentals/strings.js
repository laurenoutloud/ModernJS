/* Strings */
const firstName = 'William';
const lastName = 'Johnson';

let val;
const age = 25;

val = firstName + lastName;

//Concatenation
val = firstName + ' ' + lastName;

//Appending
val = 'Joe ';
val += 'Smith';

val = "Hello my name is " + firstName + " and I am " + age;

//Escaping
val = 'That\'s awesome, I can\'t wait'; //use backslash to escape characters

//Length
val = firstName.length; //property so dont need brackets

//concat
val = firstName.concat(' ', lastName);

//to upper/lowercase
val = firstName.toUpperCase();
val = firstName.toLocaleLowerCase();

//read only array
//val = firstName[2]; //gets 2 index of firstName
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');

val = firstName.charAt(4);

//get last char

val = firstName.charAt(firstName.length -1);

//substring
val = firstName.substring(0,4); 
//slice (mostly used with arrays to pull things out)
val = firstName.slice(0, 4);
val = firstName.slice(-3);

//split splits string into array based on separator
const str = "Hello my name is Bob";
val = str.split(' ')

//replace
val = str.replace('Bob', 'Jack');

//includes - gives bool based on whether or not something is included in the string
val = str.includes('Hello');

console.log(val);