const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 36,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function() {
    return 2019 - this.age; //this refers to this object
  }
};
let val;

val = person;
val = person.firstName;
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'John', age: 30 },
  { name: 'Joe', age: 24 },
  { name: 'Nancy', age: 50 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}
