// app.jsx
import mongoose from "mongoose";

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/kerala")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error:", err));

// Define schema & model
const studentSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  age: Number
});

const Student = mongoose.model("student", studentSchema);

// Main function
async function run() {
  // Insert sample documents
  await Student.insertMany([
    { _id: 123433, name: "DDD", age: 32 },
    { _id: 123434, name: "BBB", age: 20 },
    { _id: 123435, name: "AAA BBB", age: 10 }
  ]);

  // (1) Create text index on 'name'
  await Student.collection.createIndex({ name: "text" });

  // Query for substring "BBB"
  const res1 = await Student.find({ $text: { $search: "BBB" } });
  console.log("Query 1 Results:", res1);

  // Explain stats for query 1
  const stats1 = await Student.collection.find({ $text: { $search: "BBB" } })
    .explain("executionStats");
  console.log("Query 1 Stats:", stats1.executionStats);

  // (2) Create index on 'age'
  await Student.collection.createIndex({ age: 1 });

  // Query for age > 15
  const res2 = await Student.find({ age: { $gt: 15 } });
  console.log("Query 2 Results:", res2);

  // Explain stats for query 2
  const stats2 = await Student.collection.find({ age: { $gt: 15 } })
    .explain("executionStats");
  console.log("Query 2 Stats:", stats2.executionStats);

  // Close connection
  mongoose.connection.close();
}

run();
