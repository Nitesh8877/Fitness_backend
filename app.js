const express=require('express')
const mongoose=require('mongoose')
const routes=require('./routes/api')
const db=require('./models')
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))

mongoose.connect("mongodb://127.0.0.1:27017/fitness")
app.use(routes)

app.listen(4000,()=>{
    console.log("server now on port 4000")
})