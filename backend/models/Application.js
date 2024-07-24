const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  jobPost: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPost' },
  volunteer: { type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' },
  status: { type: String, default: 'pending' },
});

module.exports = mongoose.model('Application', ApplicationSchema);
