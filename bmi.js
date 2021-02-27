const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const request = require("request");
const { static } = require("express");




app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/bmi.html");
})

app.post("/", function(request, response) {
    var weight = parseFloat(request.body.weightofuser);
    var height = parseFloat(request.body.heightofuser);
    var result = weight / (height * height);
    var finalresult = result.toFixed(2);
    response.render("result", {
        bmiofuser: finalresult
    })
})


app.get("/bmi.html", function(request, response) {
    response.sendFile(__dirname + "/bmi.html");
})
app.listen(3001, function() {
    console.log("The server has been started at port 3001");
})