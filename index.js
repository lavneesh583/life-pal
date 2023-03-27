const express = require("express");
const app = express();
require("dotenv").config;
require("./db/conn");

const authRoute = require("./routers/auth");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})