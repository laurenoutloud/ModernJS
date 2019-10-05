//Dates and Time
let val;
const today = new Date(); //defaults to today's date
let birthday = new Date('9-10-1981 11:20:00');
birthday = new Date('September 10 1981');
birthday = new Date('9/10/1981');

val = today.getMonth(); //ZERO BASED JANUARY IS 0!!!
val = today.getDate();
val = today.getDay(); //SMTuW.. numerical value
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //Gets a time stamp

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1985);
birthday.setHours(3);

console.log(birthday);
