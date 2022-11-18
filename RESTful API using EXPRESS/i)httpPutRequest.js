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

app.put("/api/courses/:id", (req, res) => {
  //return the course required
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  //else return 404 -Resource not Found
  if (!course) res.status(404).send("The course with given ID was not found!");

  //Validate using JOI
  //If invalid, return 400 -Bad Request

  //Update Course
  course.name = req.body.name;
  //Return the updated Course
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
