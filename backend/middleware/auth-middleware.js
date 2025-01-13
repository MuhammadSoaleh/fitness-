const jwt = require("jsonwebtoken");
const User = require("../models/auth-model");

const authMiddleware = async (req,res,next) =>
    {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(400).json({
                msg:"Unauthorized HTTP,token not provided"
            
            })}
            const jwToken=token.replace("Bearer","").trim();
            console.log("Token from auth Middleware",jwToken);
            try {
                const isVerfied = jwt.verify(jwToken,"aptechnorthkarachi");
                const userData = await User.findOne({email:isVerfied.email});
                console.log(userData);
                req.user=userData;
                req.token=token;
                req.userId=userData._id;
                next();
            }catch (error) {
                return res.status(401).json({msg:error}) 
            }
            
        } 
    
    module.exports = authMiddleware;