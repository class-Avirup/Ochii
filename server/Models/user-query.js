const mongoose = require("mongoose");

const querySchema = mongoose.Schema({
    name: String,
    company: String,
    goal: String,
    date: String,
    budget: String,
    email: String,
    details: String
});

module.exports = mongoose.model('query', querySchema);
