const axios = require("axios");
const fs = require("fs");

const image = fs.readFileSync("../src/images/IMG_3052(1).jpg", {
    encoding: "base64"
});

axios({
    method: "POST",
    url: "https://detect.roboflow.com/aicook-lcv4d/3",
    params: {
        api_key: "API_KEY"
    },
    data: image,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
})
.then(function(response) {
    console.log(response.data);
})
.catch(function(error) {
    console.log(error.message);
})