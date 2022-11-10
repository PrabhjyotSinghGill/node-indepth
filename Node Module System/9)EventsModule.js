//Events Module
//An EVENT is a signal that something has happened in our application.
//Class : it is a container for properties & functions/methods.
//We use Camel casing convention to represent Class.
const EventEmitter = require("events");
//Object is represented by lowercase naming convention.
const emitter = new EventEmitter();
//Register a Listener
emitter.on('functionName', function(){
    console.log('listener called')
});
//Raised an Event for Listener which will be called when event is raised.
emitter.emit('functionName');
