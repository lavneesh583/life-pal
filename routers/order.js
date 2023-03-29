const router = require('express').Router();
const { User, Order } = require("../models/schemas");

router.post("/", async(req, res) => {
    const {units, address, bloodGroup, expDelivery} = req.body;
    const newOrder = new Order({
        units, address, bloodGroup, expDelivery
    });
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder); 
    } catch (e) {
        res.status(500).json(e);
    }
})

module.exports = router;