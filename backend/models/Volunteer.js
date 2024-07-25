const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  story: { type: String },
  skills: [String],
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
