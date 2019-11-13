// //Single element selectors
// // document.getElementById()

// //console.log(document.getElementById("task-title"));

// //Get things from the element
// //console.log(document.getElementById("task-title").className);

// const taskTitle = document.getElementById("task-title");
// //Change styling (used for dynamic functionality)
// taskTitle.style.background = "#333";
// taskTitle.style.color = "#fff";
// taskTitle.style.padding = "5px";
// //document.getElementById("task-title").style.display = "none";

// //Change content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "My Tasks";
// taskTitle.innerHTML = "<span style='color:red'>Task List</span>";

// //document.querySelector()
// //Select elements by anything

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5")); //gets first one if there's more than one

// document.querySelector("li").style.color = "red";
// document.querySelector("ul li").style.color = "blue";

// document.querySelector("li:last-child").style.color = "red";

// document.querySelector("li:nth-child(3)").style.color = "yellow"; //CSS3

// document.querySelector("li:nth-child(4)").textContent = "Hello World";

// document.querySelector("li:nth-child(even)").style.background = "#ccc";

/*Multiple Element Selector  */
//Returns html collections or node lists
//document.getElementsByClassName

// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "hello";

// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");
// console.log(listItems);

//document.getElementsByTagName

let lis = document.getElementsByTagName("li");
//console.log(lis);
//console.log(lis[0]);
//items[0].style.color = "red";
//items[3].textContent = "hello";

//Convert html collection to an array
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index) {
//   li.textContent = `${index}: Hello`;
// });
// console.log(lis);

//querySelectorAll returns node list
//document.querySelectorAll

const items = document.querySelectorAll("ul.collection li.collection-item");

items.forEach(function(item, index) {
  item.textContent = `${index} Hello`;
});

const liOdd = document.querySelectorAll("li:nth-child(odd");
const liEven = document.querySelectorAll("li:nth-child(even");

liOdd.forEach(function(li, index) {
  li.style.background = "#ccc";
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}

console.log(items);
