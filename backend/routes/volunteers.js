const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const volunteerController = require('../controllers/volunteerController');

console.log('Volunteer Controller:', volunteerController);

// Define the routes and attach the corresponding controller methods
router.post('/', authMiddleware, (req, res) => {
  console.log('POST /');
  volunteerController.createVolunteer(req, res);
});
router.get('/', authMiddleware, (req, res) => {
  console.log('GET /');
  volunteerController.getAllVolunteers(req, res);
});
router.get('/:id', authMiddleware, (req, res) => {
  console.log('GET /:id');
  volunteerController.getVolunteerById(req, res);
});
router.put('/:id', authMiddleware, (req, res) => {
  console.log('PUT /:id');
  volunteerController.updateVolunteer(req, res);
});
router.delete('/:id', authMiddleware, (req, res) => {
  console.log('DELETE /:id');
  volunteerController.deleteVolunteer(req, res);
});

module.exports = router;
