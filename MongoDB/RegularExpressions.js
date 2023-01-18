const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function getCourses() {
  //Expression Starting with Mosh
  const courses = await Course.find({ author: /^Mosh/ })
    //Ends with Hamedani
    .find({ author: /Hamedani$/i }) // i in the end represents the expression is NOT CASE SENSITIVE
    //Expression that contains pattern eg Mosh
    .find({ author: /.*Mosh.*/i})
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

getCourses();
