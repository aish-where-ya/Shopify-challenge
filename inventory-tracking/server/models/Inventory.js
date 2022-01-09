var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var inventorySchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
      type: String,
      required: true,
  },
  type: {
      type: String,
      required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  createdAt: Date,
});

module.exports = mongoose.model('Inventory', inventorySchema);