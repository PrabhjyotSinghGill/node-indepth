const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("echo");
});

app.get("/api/courses", (req, res) => {
  res.send(["Data Structures", "Algorithms", "Discrete Maths"]);
});

//the host machine dynamically assigns the port to the deployed app
//lets change the hardcoded port value to dynamic
//the way to fix it is ENVIRONMENT VARIABLES
//ENVIRONMENT VARIABLE is a variable that is part of the environment in which process runs. Its value is set outside this application.

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
