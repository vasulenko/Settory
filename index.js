var express = require("express"); 
var app = express(); 
var path = require("path"); 
var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');
 
/*require('react-datepicker/dist/react-datepicker.css');*/
 
app.get('/',function(req,res){ 
res.sendFile(path.join(__dirname+'/index.html')); 
//__dirname : It will resolve to your project folder. 
}); 

app.use('/static', express.static(__dirname + '/static')); 

var port = process.env.PORT || 5000; 
app.listen(port, function() { 
console.log("Listening on " + port); 
});