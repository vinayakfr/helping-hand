// routes/user.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const User = require('../models/User');

// Define the profile-type route
router.get('/profile-type', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('profileType');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ profileType: user.profileType });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
