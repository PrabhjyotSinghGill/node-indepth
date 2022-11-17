//Building a Web Server
//Step 1) Load Express Module
const express = require("express"); // returns a function which is saved in const express.
const app = express(); //The express() function is a top-level function exported by the express module.
//by default app contains http endpoint methods like
// app.get();
// app.post();
// app.put();
// app.delete();

// GET Method take 2 args --> 1) url 2) callback function : the callback function has 2 args request & response
app.get("/", (req, res) => {
  res.send("echo");
});

app.get("/api/courses", (req, res) => {
  res.send(["Data Structures", "Algorithms", "Discrete Maths"]);
});

app.listen(3000, () => console.log("Listening on port 3000"));
