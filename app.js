var localconfig = require('./localconfig');
var express = require('express');
var express_geocoding_api = require('express-geocoding-api');
var bodyParser = require('body-parser');

var app=express();
var mongoose = require('mongoose');

Airport = require('./models/airport.js');
State = require('./models/state.js');

app.use(express_geocoding_api({
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

app.get('/api/airports', function(req, res){
    Airport.getAirports(function(err, docs){
        if(err){
            res.send(err);
        }
        res.json(docs);
    });
});

app.post('/api/airports/prox', function(req, res){
    var location = req.body;
    Airport.getAirportByProximity(location, function(err, docs){
        if(err){
            res.send(err);
        }
        res.json(docs);
    })
})

app.get('/api/states', function(req, res){
    State.getStates(function(err, docs){
        if(err){
            res.send(err);
        }
        res.json(docs);
    });
});

app.get('/api/airports/state/:state', function(req, res){
    Airport.getAirportByState(req.params.state, function(err, docs){
        if(err){
            res.send(err);
        }
        res.json(docs);
    });
});

app.listen(3000);
console.log('App started on port 3000');