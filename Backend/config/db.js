const mongoose=require("mongoose")
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
const connection=mongoose.connect(mongoURI)


module.exports={
    connection
}