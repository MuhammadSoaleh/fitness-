const home = async (req,res) => {
    try {
        res.status(200).send("welcome to fitness health cear");
    } catch (error) {
        console.log(error);
    }
};
const register = async (req,res) => {
    try {
        res.status(200).send("welcome to register page")
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