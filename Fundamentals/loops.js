//For loop

for (let i = 0; i <= 10; i++) {
  if (i == 2) {
    //console.log('2 is my favorite number');
    continue;
  }

  if (i == 5) {
    //console.log('Stop');
    break;
  }
  //console.log('Number ' + i);
}

//While Loop
let i = 0;

while (i < 10) {
  //console.log('Number ' + i);
  i++;
}

//Do while
let j = 100;

do {
  //console.log('Number ' + j);
  j++;
} while (j < 10);

//Looping through arrays
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
  //console.log(cars[i]);
}

//For each
cars.forEach(function(car, index, array) {
  //console.log(`${index} : ${car}`);
  //console.log(array);
});

//Map
//returns a different array
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sarah' },
  { id: 3, name: 'Karen' },
  { id: 4, name: 'Steve' }
];

const ids = users.map(function(user) {
  return user.id;
});

//console.log(ids);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
};

//For in loop
for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}
