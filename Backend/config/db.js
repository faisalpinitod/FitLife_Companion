const mongoose=require("mongoose")
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
const connection=mongoose.connect('mongodb+srv://Faisalpinitod:faisal@cluster0.y2f7t.mongodb.net/fitlifeCompanion?retryWrites=true&w=majority')


module.exports={
    connection
}