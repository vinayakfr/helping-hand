const mongoose = require('mongoose');

const OrganisationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  jobPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'JobPost' }],
});

module.exports = mongoose.model('Organisation', OrganisationSchema);
