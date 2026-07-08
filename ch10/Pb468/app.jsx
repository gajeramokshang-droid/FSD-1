
const express=require("express")
const User=require('./models/User')
const bodyparser=require('body-parser')
const mongoose=require("mongoose")
const path=require('path')

const app=express();

app.use(bodyparser.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/jesus')
.then(()=>{console.log("Connect Successfully")})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','login'))
})

app.post('/login',async(req,res)=>{
    try{
      const { username, password } = req.body;
      const newUser=new User({username,pasword})
      await newUser.save();

      res.send('User Saved Successfully')
    }

    catch(err)
    {
        res.send(err)
    }

})

app.listen(3000);
