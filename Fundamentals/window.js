//Window Methods/ Objects/ and properties

//Alert
//alert('Hello World');

//Prompt
// const input = prompt();
// alert(input);

//Confirm
// if (confirm('Are you sure?')) {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

//Properties
let val;
//Outter height and width
val = window.outerHeight;
val = window.outerWidth;

//Inner height and width
val = window.innerHeight;
val = window.innerWidth;

//scroll points
//good for animations triggered by scroll point
val = window.scrollY;

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

//HISTORY OBJECT
//window.history.go();
//val = window.history.length;

//NAVIGATOR OBJECT
//Has to do with the actual browser, now the window
val = window.navigator;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language;

console.log(val);
