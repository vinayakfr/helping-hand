const Volunteer = require('../models/Volunteer');

exports.createVolunteer = async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json(newVolunteer);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.status(200).json(volunteers);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getVolunteerById = async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.params.id);
    if (!volunteer) {
      return res.status(404).send({ message: 'Volunteer not found' });
    }
    res.status(200).json(volunteer);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.updateVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!volunteer) {
      return res.status(404).send({ message: 'Volunteer not found' });
    }
    res.status(200).json(volunteer);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.deleteVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.findByIdAndDelete(req.params.id);
    if (!volunteer) {
      return res.status(404).send({ message: 'Volunteer not found' });
    }
    res.status(200).send({ message: 'Volunteer deleted successfully' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
