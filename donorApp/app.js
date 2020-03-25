var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json()); // peticiones aplication/jsons
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '500mb'
}));
const path = require('path');
app.use(express.static('FrontEnd'));
app.get('/*', function (req, res) {
	res.sendFile(path.join(__dirname + '/FrontEnd/index.html'));

})

var server = app.listen(9090, function () {

    console.log("Example app listening at 9090")
 });
 