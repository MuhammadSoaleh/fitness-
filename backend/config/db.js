const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb://127.0.0.1:27017/fitness');
          
        
        console.log("Connected to MongoDB successfully");
    } 
    catch (error) {
        // Log the error message for better debugging
        console.error("Connection to MongoDB failed:", error.message);
        process.exit(1);  // Exit the process with a failure code
    }
};

module.exports = connectDb;