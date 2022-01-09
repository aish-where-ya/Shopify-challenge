var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inventorySchema = new Schema({
  description: String,
  amount: Number,
  month: String,
  year: Number
});

module.exports = mongoose.model('Inventory', inventorySchema);