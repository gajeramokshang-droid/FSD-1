

const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:{type:String,required:true},
    rollno:{type:Number,required:true},
    totalmarks:{type:Number,required:true}
});

const User=mongoose.model("person",UserSchema);

module.export(User)