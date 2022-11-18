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

// HTTP Delete Request
app.delete("/api/courses/:id", (req, res) => {
  //return the course required
  let course = courses.find((c) => c.id === parseInt(req.params.id));
  //else return 404 -Resource not Found
  if (!course) {
    res.status(404).send("The course with given ID was not found!");
    return;
  }

  //Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  //Return the same course
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
