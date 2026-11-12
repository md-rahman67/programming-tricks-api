const express = require("express");
const data = require("./data-json");
const rdnNum = require("./helper");
const app = express();


app.get("/tricks", (req, res) => {
    
    if(!data.length){
        return res.status(404).json({message: "Something went wrong while fetching tricks"})
    }

    res.send(data[rdnNum()]);
})

app.listen(8080, () => {
    console.log("app is listening to port 8080");
})