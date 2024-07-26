const mongoose = require('mongoose');

const OrganisationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  description: { type: String },
  jobPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobPost' }],
});

module.exports = mongoose.model('Organisation', OrganisationSchema);
