const User = require('../models/auth-model');


const home = async (req,res) => {
    try {
        res.status(200).send("welcome to fitness health cear");
    } catch (error) {
        console.log(error);
    }
};
const register = async (req,res) => {
    try {
        const {username,email,phone,password,image,height,weight} = req.body;
        const userExist= await User.findOne({email});
        if (userExist) {
            return res.status(200).json({msg:"Email Already exist"});
        } 
            const userCreated= await User.create({username,email,phone,password,image,height,weight});
        res.status(201).json({msg:userCreated});
        
    } catch (error) {
        console.log(error);
    }
}
const login = async (req,res) => {
    try {
        res.status(200).send("welcome to login page")
    } catch (error) {
        console.log(error);
    }
}
module.exports={home,register,login}