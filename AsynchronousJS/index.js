console.log("Before");
//this function schedules a tas to be performed in future, in this case 2 seconds after
// it will call the arrow function as an argument, it doesn't wait or bloack and it returns the control to execute other commands
setTimeout(() => {
  console.log("Reading a user from database...");
}, 2000);
console.log("After"); 
