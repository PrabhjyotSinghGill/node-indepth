//For reliable and maintainable applications we need modularity
// Every file in a NODE appliction is considered a MODULE
var sayHello = function () {}; // function sayHello definiton in Module.js File 
window.sayHello(); // Problem with global scope: If function sayHello is defined in another file too will override its definition with new one.
