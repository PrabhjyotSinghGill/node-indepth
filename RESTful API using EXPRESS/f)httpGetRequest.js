const express = require("express");
const app = express();

//array
const courses = [
  { id: 1, name: "Data Structures" },
  { id: 2, name: "Algorithms" },
  { id: 3, name: "Discrete Maths" },
];

//endpoint
app.get("/", (req, res) => {
  res.send("echo");
});

//endpoint
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

//endpoint with route parameter = id
app.get("/api/courses/:id", (req, res) => {
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  //Status 404 
  if (!course) res.status(404).send("The course with given ID was not found!");
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
