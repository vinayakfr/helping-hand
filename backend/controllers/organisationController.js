const Organisation = require('../models/Organisation');

exports.createOrganisation = async (req, res) => {
  try {
    const newOrganisation = new Organisation(req.body);
    await newOrganisation.save();
    res.status(201).json(newOrganisation);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getAllOrganisations = async (req, res) => {
  try {
    const organisations = await Organisation.find();
    res.status(200).json(organisations);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getOrganisationById = async (req, res) => {
  try {
    const organisation = await Organisation.findById(req.params.id);
    if (!organisation) {
      return res.status(404).send({ message: 'Organisation not found' });
    }
    res.status(200).json(organisation);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.updateOrganisation = async (req, res) => {
  try {
    const organisation = await Organisation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!organisation) {
      return res.status(404).send({ message: 'Organisation not found' });
    }
    res.status(200).json(organisation);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.deleteOrganisation = async (req, res) => {
  try {
    const organisation = await Organisation.findByIdAndDelete(req.params.id);
    if (!organisation) {
      return res.status(404).send({ message: 'Organisation not found' });
    }
    res.status(200).send({ message: 'Organisation deleted successfully' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
