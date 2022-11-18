const Joi = require("joi");
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

//NPM package JOI is mostly used for input validation handling
// POST Method Validation
app.post("/api/courses", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.validate(req.body, schema);
  //one way of doing things which is not required if you use JOI
  //   if (!req.body.name || req.body.name.length < 3) {
  //     //Error code 400 bad Request
  //     res.status(400).send("Name is required minimum 3 Characters.");
  //     return;
  //   }

  if (result.error) {
    //Error code 400 bad Request
    res.status(400).send(result.error.details[0]);
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
