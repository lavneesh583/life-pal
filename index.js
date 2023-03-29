const express = require("express");
const app = express();
require("dotenv").config;
require("./db/conn");

const authRoute = require("./routers/auth");
const orderRoute = require("./routers/order");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/order", orderRoute);

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})