const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

username:{
    type:String,
    require:true 
},
email:{
    type:String,
    require:true 
},
password:{
    type:String,
    require:true 
},
phone:{
    type:Number,
    require:true 
},
image:{
    type:Number,
    require:true 
},
height:{
    type:Number,
    require:true 
},
weight:{
    type:Number,
    require:true 
},
})
const User = mongoose.model("User", userSchema);
exports.model=User