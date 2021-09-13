// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const pd = require('paralleldots');
pd.apiKey = process.env.pd_api_key;

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
});

app.get("/emotion-analysis", (request, response) => {


    pd.emotion(request.query.input1631426385657, "en")
        .then((response1) => {

            response.send(response1);
        })
        .catch((error) => {
            response.send(error);
        })


});



// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});