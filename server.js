const dotenv = require("dotenv").config();
const express = require("express");
const data = require("./data-json");
const rdnNum = require("./helper");
const app = express();

const PORT = process.env.PORT || 8080;


app.get("/tricks", (req, res) => {
    
    if(!data.length){
        return res.status(404).json({message: "Something went wrong while fetching tricks"})
    }

    res.send(data[rdnNum()]);
})

app.listen(PORT, () => {
    console.log(`app is listening to port ${PORT}`);
})