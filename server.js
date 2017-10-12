var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//database
require('./server/config/mongoose.js');

//route
var router = require('./server/config/routes.js')(app);





app.listen(8000, function() {
    console.log("listening on port 8000");
})