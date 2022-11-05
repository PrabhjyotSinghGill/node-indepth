//Path Object
// {
//     root: '/',
//     dir: '/Users/prabhjyotsinghgill/Documents/Javascript/Node-indepth/Node Module System',
//     base: '6)PathModule.js',
//     ext: '.js',
//     name: '6)PathModule'
//   }

const path = require("path");

var pathObj = path.parse(__filename);

console.log(pathObj);