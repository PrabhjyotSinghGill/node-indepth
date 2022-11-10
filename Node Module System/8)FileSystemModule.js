// File System Module contains Set of Methods working with Files & Directories.
// Methods comes in pairs Asynchronous or Synchronous but with NODE always prefer to use ASYNCHRONOUS
const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);
