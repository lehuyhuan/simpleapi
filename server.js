var express = require('express');
var app = express();
var fs = require("fs");

app.get('/about', function (req, res) {
   res.end("Simple api - copyright @lehuyhuan")
})

app.get('/sum', function (req, res) {
  var nums= req.query.birthday.split('');
  var sum=0;
  for (var i=0;i<nums.length;i++) {
  	sum+=parseInt(nums[i]);
  }
  console.log("TOTAL: " + sum)
  res.end(sum.toString());
})

var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
