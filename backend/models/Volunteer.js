const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  story: { type: String },
  skills: [String],
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }],
});

module.exports = mongoose.model('Volunteer', VolunteerSchema);
