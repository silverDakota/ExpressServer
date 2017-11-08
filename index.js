var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');


 
app.get('/', function (req, res) {
  //res.send('Hello World Remember localhost:3000 or 127.0.0.1:3000');
    res.sendFile(path.join(__dirname + "/index.html"));
})
app.get('/aboutme', function (req, res) {
  res.sendFile(path.join(__dirname + "/aboutme.html"));
})
//404 page regular expression /^((?!index|aboutme).)*$/gm does'nt work?
app.get('//^((?!index|aboutme).)*$/gm', function (req, res) {
  res.sendFile(path.join(__dirname + "/404.html"));
})
 
app.listen(3000, () => {
    console.log("Active");
});