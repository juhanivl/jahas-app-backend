var mongoose = require('mongoose');

var GroupSchema = new mongoose.Schema({
  groupName: String,
  groupDescription: String,
  members: Array,
  route: String,
  groupSteps: Number,
  completed: Boolean,
  created_at: {type: Date, default: Date.now},
  updated_at: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Group', GroupSchema);
