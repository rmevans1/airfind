var mongoose = require('mongoose');

//Airport Schema
var airportSchema = mongoose.Schema({
    loc: {
        type:{
            type: String
        },
        coordinates: {
            type: Array
        },
        name: {
            type: String
        },
        code: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    }
});

var Airport = module.exports = mongoose.model('Airport', airportSchema);

//Get Airpots
module.exports.getAirports = function(callback, limit){
    Airport.find(callback);
}