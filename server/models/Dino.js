var mongoose = require('mongoose');

var DinoSchema = new mongoose.Schema({
    name:String,
    height:Number,
    weight:Number
});

var Dino = mongoose.model('Dino',DinoSchema);