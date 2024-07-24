// routes/jobPosts.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const jobPostController = require('../controllers/jobPostController');

// Define the routes and attach the corresponding controller methods
router.post('/', authMiddleware, jobPostController.createJobPost);
router.get('/', authMiddleware, jobPostController.getAllJobPosts);
router.get('/:id', authMiddleware, jobPostController.getJobPostById);
router.put('/:id', authMiddleware, jobPostController.updateJobPost);
router.delete('/:id', authMiddleware, jobPostController.deleteJobPost);

module.exports = router;
