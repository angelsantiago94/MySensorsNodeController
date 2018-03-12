const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sensorSchema = new Schema({
    id :Number ,
    value: Number,
    type: Number,
    updateTime: Date
});

module.exports = mongoose.model('sensor',sensorSchema,'Sensors');