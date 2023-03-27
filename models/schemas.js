const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    addhar:{
        type: Number,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    bloodGroup:{
        type: String,
        required: true
    },
    diseases:{
        type: Array
    }
}, 
    {timestamps: true}
);

const User = new mongoose.model("User", userSchema);

module.exports = {
    User
};