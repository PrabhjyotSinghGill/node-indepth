//Module Wrapper Function
//Node doesn't execute code directly, it always wraps the code inside each module inside a function. 
(function (exports, require, module, __filename, __dirname) {
  var url = "http://mylogger.io/log";

  function log(message) {
    console.log(message);
  }
  module.exports = log;
});
