const express = require("express");
const bodyParser = require ("body-parser");
const request = require("resquest");

const app = express();

app.use(express.static("public"));
//To be able to use CSS from both internet link and local file
// Must create a folder 'public' then another 'css' then drag img in there

app.use(bodyParser.urlencoded({extended:true}));
//Add body parser

app.get("/", function(req, res){
  res.sendFile(__dirname + "/singup.html")
}); 
//Go get the file.html page

app.post("/", function(req, res) {
//Add bodyparser

	var firstName = req.body.fName;
	var lastName = req.body.lName;
	var email = req.body.email;
//go and add the classes on the HTML page

console.log(firstName);

  var data = {
    members: [
      { 
          email_address: email, 
          status: subscribe
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName
          }
        }
      ]
    };
  var jsonData = JSON.stringify(data);
  });

app.listen(process.env.PORT || 3000,function() {
  console.log("Server is running");
});

const url = URLfrommailchimp (check at 13:00)

const option = {
	method:"POST"
	auth: "amelie:APIkey"
}
//this part I didn't understand (check 15:00 - sec 249)

const request = https.request(url, options, function(response){
	response.on("data, function(data) {
	console.log(JSON.parse(data));
})

request.write(jsonData);
request.end();