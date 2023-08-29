const express=require("express")
const {User}=require('../models/user.model')

const userRouter=express.Router()


userRouter.post('/createUser' , async (req, res) => {
    const {name,age,gender,height,weight,email,contactNumber}=req.body
    try {
      const newUser = new User({name,age,gender,height,weight,email,contactNumber});
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      res.status(400).json({ error: 'Error creating user' });
    }
});


module.exports={
    userRouter
}