//Extremely powerful when dealing with async code
//PROMISE: holds the eventual result of an async operation.

const promise = new Promise((resolve, reject) => {
  //All kind of asynchronous work done here
  setTimeout(() => {
    resolve({ name: "gill" });
  }, 2000);
  //reject(new Error('message'));
});

promise.then((result) => console.log("Result", result));
