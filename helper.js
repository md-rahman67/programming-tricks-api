const dataSize = require("./data-json");

const randomNum = () => {
    let rdnNum = Math.floor(Math.random() * dataSize.length);
    return rdnNum;
}

module.exports = randomNum;