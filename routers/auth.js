const router = require('express').Router();
const { User } = require("../models/schemas");

const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: cryptoJS.AES.encrypt(
        req.body.password, 
        process.env.PASS_SEC).toString(),
        addhar: req.body.addhar,
        address: req.body.address,
        bloodGroup: req.body.bloodGroup,
        diseases: req.body.diseases
    });
    try{
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    }
    catch(e)
    {
        res.status(500).json(e);
    }
    
});

module.exports = router;