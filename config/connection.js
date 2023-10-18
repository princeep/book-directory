const mongoose = require('mongoose');

const connectDB = async(MONGO_URL)=>{
    try{
        await mongoose.connect(MONGO_URL);
        console.log("Database connection successful")
    } catch(error){
        console.log("Database connection error");
    }
}

module.exports = connectDB;
