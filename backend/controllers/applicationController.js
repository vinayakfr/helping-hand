const Application = require('../models/Application');

exports.getAllApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate('jobPost volunteer');
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id).populate('jobPost volunteer');
    if (!application) {
      return res.status(404).send({ message: 'Application not found' });
    }
    res.status(200).json(application);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!application) {
      return res.status(404).send({ message: 'Application not found' });
    }
    res.status(200).json(application);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) {
      return res.status(404).send({ message: 'Application not found' });
    }
    res.status(200).send({ message: 'Application deleted successfully' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
