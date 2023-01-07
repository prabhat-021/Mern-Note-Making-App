const asyncHandler = require("express-async-handler");
const User = require("../models/userModel.js");

const registerUser = async (req, res) => {
    const { name, email, password, pic } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
        return res.status(400).json({ message: "User already exists" });
        
    }

    res.json({
        name, email
    });
};

module.exports = { registerUser };