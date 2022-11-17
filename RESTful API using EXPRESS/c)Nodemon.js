// NODE MONITOR or nodemon --- a node package
// server runs using command node server.js
//when code is changed in server, we have to stop server and run it again
// Install package nodemon using below command
// sudo npm i -g nodemon
// we can use command nodemon server.js to update changes constantly without stopping it
const express = require("express");
const app = express(); 
app.get("/", (req, res) => {
  res.send("echo");
});

app.get("/api/courses", (req, res) => {
  res.send(["Data Structures", "Algorithms", "Discrete Maths"]);
});

app.listen(3000, () => console.log("Listening on port 3000"));
