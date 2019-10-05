/*Functions and Expressions */

//Blocks of code that can be defined and called at a later time
//Sometimes defined and called at the same time

//Function declarations
function greet(firstName = 'John', lastName = 'Doe') {
  //Defaults to John Doe
  //console.log('Hello');
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('Sarah', 'Walker'));

//Function expressions (putting a function as a variable assignment)
const square = function(x = 3) {
  return x * x;
};
console.log(square());

//Immediately invokable function expressions (IIFIES)
//Function that you declare and run at the same time
(function() {
  console.log('IIFE ran..');
})();

(function(name) {
  console.log('Hello ' + name);
})('Brad');

//Proper methods
const todo = {
  add: function() {
    console.log('Add todo..');
  },
  edit: function(id) {
    console.log(`edit todo ${id}`);
  }
};

todo.delete = function(id) {
  console.log(`delete ${id}`);
};

todo.add();
todo.edit(22);
todo.delete(25);
