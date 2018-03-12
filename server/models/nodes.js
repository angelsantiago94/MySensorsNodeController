const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nodeSchema = new Schema({
    id: Number,
    protocol: String,
    sketchName: String,
    sketchVersion: String,
    sensors:[{
        type: Schema.ObjectId,
        ref: 'Sensors'
    }]
    
});

module.exports = mongoose.model('node',nodeSchema,'Nodes');