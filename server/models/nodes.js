const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nodeSchema = new Schema({
    id: Number,
    protocol: String,
    sketchName: String,
    sketchVersion: String,
    sensors: [Sensors ]
});

module.exports = mongoose.model('node',nodeSchema,'Nodes');