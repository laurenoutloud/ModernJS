/* Numbers and the Math object */

const num1 = 100;
const num2 = 60;
let val;

//Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 % num2; //returns remainder

//Math object
val = Math.PI;
val = Math.E; //Eulers num
val = Math.round(2.4);
val = Math.ceil(2.4);
val = Math.floor(2.4);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,5,4);
val = Math.max(2,44, 55,4);
val = Math.floor(Math.random() * 20 + 1);

console.log(val);