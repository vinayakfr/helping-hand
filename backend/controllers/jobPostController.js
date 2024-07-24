// controllers/jobPostController.js
const JobPost = require('../models/JobPost');

exports.getAllJobPosts = async (req, res) => {
  try {
    const jobPosts = await JobPost.find().populate('organisation');
    res.status(200).json(jobPosts);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getJobPostById = async (req, res) => {
  try {
    const jobPost = await JobPost.findById(req.params.id).populate('organisation');
    if (!jobPost) {
      return res.status(404).send({ message: 'Job post not found' });
    }
    res.status(200).json(jobPost);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.createJobPost = async (req, res) => {
  try {
    const newJobPost = new JobPost(req.body);
    await newJobPost.save();
    res.status(201).json(newJobPost);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.updateJobPost = async (req, res) => {
  try {
    const jobPost = await JobPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!jobPost) {
      return res.status(404).send({ message: 'Job post not found' });
    }
    res.status(200).json(jobPost);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.deleteJobPost = async (req, res) => {
  try {
    const jobPost = await JobPost.findByIdAndDelete(req.params.id);
    if (!jobPost) {
      return res.status(404).send({ message: 'Job post not found' });
    }
    res.status(200).send({ message: 'Job post deleted successfully' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
