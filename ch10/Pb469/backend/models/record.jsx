

const express=require('express')
const mongoose=require('mongoose')
app.use(express.json());
const app=express();
mongoose.connect('mongodb://127.0.0.1:27017/kerala').then(()=>{
    console.log("Connect")
})

const userdata=new mongoose.Schema({text:String})
const User=mongoose.model('jesuss',userdata);

app.post('/add',async(req,res)=>{
    try{
        const newrecord=new User({text:req.body.text})
        await newrecord.save();
         res.json({ message: 'Saved!' });
    }
    catch(err){
        res.send(err)
    }
})

app.listen(1000);

