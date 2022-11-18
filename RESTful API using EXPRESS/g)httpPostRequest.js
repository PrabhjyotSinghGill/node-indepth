const express = require("express");
const app = express();

// Middleware: middleware returned by express.json() will be called by app.use in request processing pipeline.
app.use(express.json());

//array
const courses = [
  { id: 1, name: "Data Structures" },
  { id: 2, name: "Algorithms" },
  { id: 3, name: "Discrete Maths" },
];

//GET all Courses endpoint
app.get("/api/courses", (req, res) => {
  res.send(courses);
});

// POST Method
app.post("/api/courses", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name, // in order for this line to work we need to enable parsing of JSON objects , by default this feature is not enabled in Express.
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
