const mongoose = require("mongoose");
const jwt=require("jsonwebtoken")
const contactSchema = new mongoose.Schema({

username:{
    type:String,
    require:true 
},
email:{
    type:String,
    require:true 
},
subject:{
    type:String,
    require:true 
},
message:{
    type:String,
    require:true 
},

});


const Contact= mongoose.model("contact", contactSchema);
module.exports=Contact;