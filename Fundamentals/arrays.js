//Arraays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ["Apple", "Banana", "Oranged", "Pear"];
const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

//console.log(mixed);

let val;
//array length

val = numbers.length;
//Check if is array
val = Array.isArray("test"); //good for DOM manipulation
//single val
val = numbers[3];
val = numbers[0];

//instert into array
numbers[2] = 100;

//find index of value
val = numbers.indexOf(36);

//Mutation
// numbers.push(250); //add to end
// numbers.unshift(120); //add to front
// numbers.pop(); //remove from end
// numbers.shift(); //remove from front
// numbers.splice(1, 3); //where you want to start and end
// numbers.reverse(); //reverse

//Concatenate arrays
val = numbers.concat(numbers2);
//Sorting arrays
val = fruit.sort();
//val = numbers.sort();

//Use compare function to sort numbers
// val = numbers.sort(function(x, y) {
//   return x - y;
// });
// val = numbers.sort(function(x, y) {
//   y - x;
// });

//Find
function over50(num) {
  return num > 50;
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);
