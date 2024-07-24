const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const organisationController = require('../controllers/organisationController');

console.log('Controller:', organisationController);

// Define the routes and attach the corresponding controller methods
router.post('/', authMiddleware, (req, res) => {
  console.log('POST /');
  organisationController.createOrganisation(req, res);
});
router.get('/', authMiddleware, (req, res) => {
  console.log('GET /');
  organisationController.getAllOrganisations(req, res);
});
router.get('/:id', authMiddleware, (req, res) => {
  console.log('GET /:id');
  organisationController.getOrganisationById(req, res);
});
router.put('/:id', authMiddleware, (req, res) => {
  console.log('PUT /:id');
  organisationController.updateOrganisation(req, res);
});
router.delete('/:id', authMiddleware, (req, res) => {
  console.log('DELETE /:id');
  organisationController.deleteOrganisation(req, res);
});

module.exports = router;
