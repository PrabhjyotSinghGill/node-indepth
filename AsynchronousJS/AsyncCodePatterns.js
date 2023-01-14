console.log("Before");
getUser(1);
console.log("After");

function getUser(id) {
  setTimeout(() => {
    console.log("Reading a user from database...");
    return { id: id, gitUsername: "gill" };
  }, 2000);
}

//There are 3 ways of dealing with async codes
//1) Callbacks
//2) Promises
//3) Async/await
