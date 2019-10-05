//IF Statements and Comparison
const id = 100;

// //EQUAL TO
// // == means comparison, = == assignment
// //Tests value, not type
// if (id == 101) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// //Not Equal to
// if (id != 101) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// //To test value and type use ===
// if (id === 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }
// if (id !== 100) {
//   console.log('correct');
// } else {
//   console.log('incorrect');
// }

// //Test if id exists by checking if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log(`No ID`);
// }

//Greater / Less than
if (id >= 100) {
  console.log('Correct');
} else {
  console.log('Incorrect');
}

// //IF ELSE
// const color = 'yellow';
// if (color === 'red') {
//   console.log('Color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

//Logical operators

const name = 'Steve';
const age = 74;

// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

//OR ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

//TERNARY OPERATOR
console.log(id === 100 ? 'Correct' : 'Incorrect');

/* Switches */
const color = 'yellow';

// Use when you have a lot of different cases
switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
}
let day;
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;
}
console.log(`today is ${day}`);
