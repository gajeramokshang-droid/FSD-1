

const express=require('express');
const mongoose=require('mongoose')
const Student=require('/model/User')
const app=express();
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/student')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.post('/add',async(req,res)=>{
    try{
        const {name, rollno, totalmarks}=req.body;
        const newUser=new User({name,rollno,totalmarks});
        await newUser.save();
        res.json({Message:"Success"})
    }
    catch(err){
        console.log(err);
    }
})

app.listen(1000);