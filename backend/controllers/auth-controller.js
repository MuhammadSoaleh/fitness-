const User = require('../models/auth-model');
const bcrypt = require('bcrypt');

const home = async (req,res) => {
    try {
        res.status(200).send("welcome to fitness health cear");
    } catch (error) {
        console.log(error);
    }
};
const register = async (req,res) => {
    try {
        const {username,email,password,age,height,weight} = req.body;
        const userExist= await User.findOne({email});
        if (userExist) {
            return res.status(200).json({msg:"Email Already exist"});
        } 
        const hash_password = await bcrypt.hash(password, 12);
            const userCreated= await User.create({username,email,password:hash_password,age,height,weight});
        res.status(201).json({msg:userCreated});
        token:await userCreated.generateToken()
    } catch (error) {
        console.log(error);
    }
}
const login = async (req,res) => { 
    try {
       const {email,password} = req.body;
       const userExist = await User.findOne({email});
       if (!userExist) {
        return res.status(400).json({msg:"Invalid Credientials"});
       } 
       const isPasswordisvalid = await bcrypt.compare(password,userExist.password);
       if(isPasswordisvalid){
        res.status(200).json({msg:"Login Success",
            msg: userExist,
            token:await userExist.generateToken()
        })
    }
    else{
        return res.status(400).json({msg:"Invalid Credientials"});
    }
    } catch (error) {
        console.log(error);
    }
}
module.exports={home,register,login}