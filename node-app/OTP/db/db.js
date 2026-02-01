const mongoose = require("mongoose");
const env = require("../example.env");
const connectDB = async () => {
    try{
        await mongoose.connect(env.MONGO_URI);
        console.log("Mongodb connected successfully");
    }catch(err){
        console.error("Mongodb connection failed", err.message);
        process.exit(1);
    }
};

module.exports = connectDB;