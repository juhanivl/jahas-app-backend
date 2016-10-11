var mongoose = require('mongoose');

var GroupSchema = new mongoose.Schema({
  groupName: String,
  groupRoute: String,
  groupSteps: Number,
  created_at: {type: Date, default: Date.now},
  updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Group', GroupSchema);
