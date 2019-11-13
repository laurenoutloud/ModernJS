//Move up and down, deal with parent and children of specific nodes
let val;
const list = document.querySelector("ul");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

//Get child nodes (includes line breaks)
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

/*
1 - Element
2 - Attribute (deprecated)
3 - Text node 
8 - comment
9 - Document itself
10 - Doctype
*/

//Get children element nodes (no line breaks)
//val = list.children;
val = list.firstElementChild;

//Get parent node
val = listItem.parentNode;
val = listItem.parentElement;

//Get sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
console.log(val);
