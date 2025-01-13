const Contact = require("../model/contact-model");
const contactForm = async(req,res) =>
{
    try {
        const response = req.body;
        await Contact.create(response);
        res.status(200).json({msg:"message sent"});
    } catch (error) {
        res.status(400).json({msg:"message not sent"});
    }
} 
module.exports = contactForm;