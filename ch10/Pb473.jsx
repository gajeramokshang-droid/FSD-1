const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentdb')
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Define schema with validations
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,          // (1) Required field
    minlength: 4,            // Minimum length 4
    maxlength: 12            // Maximum length 12
  },
  age: {
    type: Number,
    min: 1,                  // (2) Minimum value 1
    max: 35                  // Maximum value 35
  },
  gender: {
    type: String,
    uppercase: true,         // (3) Must be capital letters
    enum: ["MALE", "FEMALE"] // Allowed values only
  }
});

// Create model
const Student = mongoose.model('Student', studentSchema);

// Example insert
async function runDemo() {
  try {
    const newStudent = new Student({
      name: "Mokshang",
      age: 25,
      gender: "MALE"
    });

    await newStudent.save();
    console.log("Student saved successfully!");
  } catch (err) {
    console.error("Validation error:", err.message);
  } finally {
    mongoose.connection.close();
  }
}

runDemo();
