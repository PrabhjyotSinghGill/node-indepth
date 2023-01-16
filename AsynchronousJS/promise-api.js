//Creating Settled Promises
const prom = Promise.resolve({ id: 1 });
prom.then((result) => console.log(result));

const pro = Promise.reject(new Error("Reason for rejection...."));
pro.catch((result) => console.log(result));
