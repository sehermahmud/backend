const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const placeSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    service: { type: String, required: true },
    features: { type: String, required: true },
    complexity: { type: String, required: true },
    platforms: { type: String, required: true },
    users: { type: String, required: true },
    total: { type: String, required: true },
    search: {type: Boolean, required: true}
});

module.exports = mongoose.model('Project', placeSchema);