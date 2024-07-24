const User = require('../models/User');

// Get user profile type
exports.getUserProfileType = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('role');
    res.json({ type: user.role });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
