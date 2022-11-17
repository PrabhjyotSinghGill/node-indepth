const express = require("express");
const app = express();

//endpoint
app.get("/", (req, res) => {
  res.send("echo");
});

//endpoint
app.get("/api/courses", (req, res) => {
  res.send(["Data Structures", "Algorithms", "Discrete Maths"]);
});

//endpoint with route parameter = id
app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
