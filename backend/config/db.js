const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb+srv://soaleh:soaleh123@cluster0.apfjd.mongodb.net/fitness?retryWrites=true&w=majority&appName=Cluster0');
          
        
        console.log("Connected to MongoDB successfully");
    } 
    catch (error) {
        // Log the error message for better debugging
        console.error("Connection to MongoDB failed:", error.message);
        process.exit(1);  // Exit the process with a failure code
    }
};

module.exports = connectDb;