//OS MODULE
//To load OS Module
const os = require("os");

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

//Concatenation
console.log("Total Memory:" + totalMemory);
//Same statement using Template String
console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
