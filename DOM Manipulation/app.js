let val;

val = document;
val = document.all;

val = document.all[2];
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.contentType;
val = document.forms;
val = document.forms[0].id;

val = document.links;
val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts; //gives a collection of scripts
let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);
