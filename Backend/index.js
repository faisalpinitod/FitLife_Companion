const express=require('express')
const {connection}=require('./config/db')
const cors=require("cors")
const {userRouter}=require('./routes/user.router')
const {trainerRouter}=require('./routes/trainers.router')
const { json } = require('body-parser')
const app=express()


app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Welcome")
})
app.use("/user",userRouter)
app.use("/trainer",trainerRouter)

app.listen(8000,async()=>{
    try{
        await connection
        console.log("The DB is connected to server!")
    }catch(err){
        console.log("The Db is not connected!")
    }
    console.log("The server is running at port 8000")
})