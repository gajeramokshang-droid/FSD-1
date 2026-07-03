// Consider the following collection named student:[ { name: "Rahul", branch: "CSE", marks: 85 }, { name: "Anita", branch: "CE", marks: 72 }, 
//     { name: "Vikram", branch: "CSE", marks: 90 }, { name: "Priya", branch: "CE", marks: 65 }, { name: "Arjun", branch: "CSE", marks: 75 }]
//     Using MongoDB Aggregation Framework, write queries to:
//     1. Group students by branch and count total students in each branch.
//     2. Calculate the average marks for each branch.
//     3. Find the highest marks in each branch.
//     4. Display only students who scored more than 75 marks.
//     5. Sort all students by marks in descending order.

db.students.aggregate([{$group:{_id:"branch",totalstudents:{$sum:1}}}])


db.students.aggregate([{$group:{_id:"branch",avgMarks:{$avg:"$marks"}}}])


db.students.aggregate([{$group:{_id:"branch",Highest:{$max:"$marks"}}}])


db.students.find({marks:{$gt:75}},{name:1})


db.students.find().sort({marks:-1})
