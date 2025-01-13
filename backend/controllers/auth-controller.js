
const User = require("../models/auth-model");
const Nutrition = require("../models/nutrition-model"); 
const bcrypt = require("bcrypt")
const register = async (req, res) => {
    try {
        // Extracting data from request body
        const { username, email, password, age,height,weight } = req.body;

        // Check if the user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "Email Already Exists" });
        }
        const hash_password = await bcrypt.hash(password,10);
const userCreated = await User.create({username, email, password:hash_password,age,height,weight})
        res.status(201).json({ msg: userCreated,
            token:await userCreated.generateToken()
         });
    } catch (error) {
        console.log(error);
        res.status(400).json({ msg: error });
    }
};

const login = async (req,res)=>{
    try {
        const{email,password} = req.body;
        const userExist = await User.findOne({email});
        if(!userExist){
            return res.status(400).json({msg:"Invalid Email or Password"});

        }
    const isPasswordValid = await bcrypt.compare(password,userExist.password);
    if(isPasswordValid){
        res.status(200).json({
            msg: userExist,
            token:await userExist.generateToken()
        })
    }
    else{
        res.status(400).json({msg:"Invalid Email or password"})
    }
    } catch (error) {
        console.log(error)
    }
}

const home = async (req, res) => {
    try {
      const { email, password, weight } = req.body;
      const userExist = await User.findOne({weight});
      
      if (!weight) {
        return res.status(400).json({ msg: "Weight is required" });
      }
  
      
      if (weight < 49) {
        return res.status(200).json({ msg: "You are underweight" });
      } else if (weight >= 49 && weight <= 70) {
        return res.status(200).json({ msg: "You are healthy" });
      } else if (weight > 70 && weight <= 90) {
        return res.status(200).json({ msg: "You are overweight" });
      } else if (weight > 90) {
        return res.status(200).json({ msg: "You are unhealthy" });
      }
  
      
      res.status(200).json({ msg: "Weight data not processed" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Server Error" });
    }
  };
  

const user = async(req,res)=>
{
    try {
        // res.status(200).json({msg:"hi User......!!"})
const userData=req.user;
console.log(userData);
res.status(200).json({msg:userData});
    } catch (error) {
        return console.log(error)
    }
}
module.exports = {home,register,login,user};