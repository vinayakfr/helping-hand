// routes/applications.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const applicationController = require('../controllers/applicationController');

// Define the routes and attach the corresponding controller methods
router.get('/', authMiddleware, applicationController.getAllApplications);
router.get('/:id', authMiddleware, applicationController.getApplicationById);
router.put('/:id', authMiddleware, applicationController.updateApplicationStatus);
router.delete('/:id', authMiddleware, applicationController.deleteApplication);

module.exports = router;
