var localconfig = require('./localconfig');
var express = require('express');
var express_geocoding_api = require('express-geocoding-api');
var bodyParser = require('body-parser');

var app=express();
var mongoose = require('mongoose');

Airport = require('./models/airport.js');

app.use(express_geocode_api({
    geocoder: {
        provider: 'google'
    }
}));

//mongoose connect
mongoose.connect(localconfig.connection_url);
var db = mongoose.connection;

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Please use /api/airports or /api/states endpoints');
});

app.listen(3000);
console.log('App started on port 3000');