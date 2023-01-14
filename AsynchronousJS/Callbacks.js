console.log("Before");
getUser(1, (user) => {
  console.log("User", user);
});
//example of a callback function, when the result of a async function is ready it is passed to the callback function to process.
console.log("After");

//async function connecting with database and returning the results to callback function to console.log("User", user);
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database...");
    callback({ id: id, gitUsername: "gill" });
  }, 2000);
}
