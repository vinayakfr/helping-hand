const mongoose = require('mongoose');

const JobPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  organisation: { type: mongoose.Schema.Types.ObjectId, ref: 'Organisation' },
  applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Volunteer' }],
});

module.exports = mongoose.model('JobPost', JobPostSchema);
