//Structure of a MODULE
// Module {
//     id: '.',
//     path: '/Users/prabhjyotsinghgill/Documents/Javascript/Node-indepth/Node Module System',
//     exports: {},
//     filename: '/Users/prabhjyotsinghgill/Documents/Javascript/Node-indepth/Node Module System/index.js',
//     loaded: false,
//     children: [],
//     paths: [
//       '/Users/prabhjyotsinghgill/Documents/Javascript/Node-indepth/Node Module System/node_modules',
//       '/Users/prabhjyotsinghgill/Documents/Javascript/Node-indepth/node_modules',
//       '/Users/prabhjyotsinghgill/Documents/Javascript/node_modules',
//       '/Users/prabhjyotsinghgill/Documents/node_modules',
//       '/Users/prabhjyotsinghgill/node_modules',
//       '/Users/node_modules',
//       '/node_modules'
//     ]
//   }

//Creating a Module
var url = "http://mylogger.io/log";

//function log is scopped to this module ie they are private to this module
function log(message){
    //Send a HTTP request
    console.log(message);
 }

 module.exports.log = log; // making log function public by exporting, it will be available outside of this module
 module.exports.endPoint  = url;