const dotenv = require("dotenv").config();
const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("app is listening to port 8080");
})