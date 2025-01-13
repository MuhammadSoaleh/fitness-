const mongoose = require("mongoose");
const jwt=require("jsonwebtoken")
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

age:{
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
});
userSchema.methods.generateToken= async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            username:this.username,
            email:this.email,
            password:this.password,
            
            age:this.age,
            height:this.height,
            weight:this.weight,
        },"aptechnorthkarachi",{
            expiresIn:"30h"
        })
    } catch (error) {
        console.log(error);
    }
}
const User= mongoose.model("User", userSchema);
module.exports=User;