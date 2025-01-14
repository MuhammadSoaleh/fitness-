
const Service = require("../models/nutrition-model")

const services = async (req,res) =>
{
    try {
        const response = await Service.find();
        if (!response) {
            res.status(400).json({msg:"No Data Found"})
            return
        }
        res.status(200).json({msg:response})
    } catch (error) {
        console.log(error);
    }
}
module.exports=services;