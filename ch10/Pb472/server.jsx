

const express=require('express')
const mongoose=require('mongoose');
app.use(express);

app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.100.0.0:12707/mokshang').then(()=>{
    console.log("Success")
});

const UserSchema=new mongoose.Schema({ username: { type: String, required: true }});

const student=mongoose.model("student",UserSchema);

app.post('/emraanhashmi',async(req,res)=>{
    try{
         username: req.body.username
        const newUser=new student({username})
        await newUser.save()
        res.json(newUser)
    }
    catch(err)
    {
        console.log(err)
    }
})

app.listen(1000)