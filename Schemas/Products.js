const {Schema} = require('mongoose');
module.exports = new Schema({
    category: String,
    name: String,
    price: Number,
    description: String,
    url: String
});
