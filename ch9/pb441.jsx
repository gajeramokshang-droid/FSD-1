// Map following SQL queries to MongoDB query:
// (1) update employee set name="TTT" where age not in {12,33,44,55}
// (2) select count(*) from employee where age>23
// (3) update employee set age=age+10


db.jesus.updateMany({age:{$ne:[12,33,55,44]}},{$set:{name:"Jesus"}})


db.jesus.countDocuments({age:{$gt:23}})


db.jesus.updateMany({},{$set:{age:{$inc:10}}})
