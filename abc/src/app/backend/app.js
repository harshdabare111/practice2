
const express=require('express')
const bodyparser=require('body-parser')
const cors=require('cors')
const app=express()
const model=require('./db.js')

app.use(bodyparser.json())
app.use(cors())

app.get("/",(req,res)=>{
    model.find().then(p=>res.send(p)).catch(err=>console.log)
})

app.post("/",(req,res)=>{
    const data=new model(
        {
            "name":req.body.name,
            "address":req.body.address,
            "username":req.body.username,
            "password":req.body.password
        }
    )
    data.save().then(p=>res.send({"message":"data save"})).catch(err=>console.log(err))
})

app.post("/home",(req,res)=>
{
    model.find({"username":req.body.username1}).then(p=>{if
    (p[0].username===req.body.username1 && p[0].password===req.body.password1)

{
    res.send({"message":"succesfully login"})
}else{
    res.send({"message":"logine failed"})
}


})
.catch(err=>res.send({"message":"invalid user"}))
})

app.listen(3245)


