//Extremely powerful when dealing with async code
//PROMISE: holds the eventual result of an async operation.

const promise = new Promise((resolve, reject) => {
  //All kind of asynchronous work done here
  setTimeout(() => {
    // resolve({ name: "gill" });
    reject(new Error("message"));
  }, 2000);
});

promise
  .then((result) => console.log("Result", result))
  .catch((error) => console.log("Error", error.message));
