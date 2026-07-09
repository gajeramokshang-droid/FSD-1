

const mongoose=require('mongoose');
const { isLowercase } = require('validator');
const User = require('./Pb467');

mongoose.connect('mongodb://127.0.0.1:27017').then(()=>{console.log("Success")})

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        match:[/^\S+@\S+\.\S+$/,"Please entered valid data"]
    },
    password:{
        type:String,
        minlength:8,
        maxlength:12
    },
      city: {
    type: String,
    enum: ['baroda', 'surat', 'ahmedabad'],
    required: true
      }
})

const User=mongoose.model("person",UserSchema);

async function jesus(){
    const newUser=new User({
        name:"Mokshang",
        surname:"Gajera",
        email:"gajera@gmail.com",
        password:"mypassword",
        city:"baroda"
    });

   await newUser.save();
}

jesus();
module.export(User);