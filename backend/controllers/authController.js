const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Volunteer = require('../models/Volunteer');
const Organisation = require('../models/Organisation');

exports.register = async (req, res) => {
  console.log('Register endpoint hit');
  const { name, email, password, role, story, skills, description } = req.body;

  try {
    console.log('Received data:', { name, email, password: '***', role, story, skills, description });

    let user = await User.findOne({ email });
    if (user) {
      console.log('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password,
      role
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    console.log('User saved:', user);

    if (role === 'volunteer') {
      const volunteer = new Volunteer({
        user: user._id,
        name, // Ensure name is passed here
        story,
        skills
      });

      await volunteer.save();
      console.log('Volunteer saved:', volunteer);
    } else if (role === 'organisation') {
      const organisation = new Organisation({
        user: user._id,
        name,
        description
      });

      await organisation.save();
      console.log('Organisation saved:', organisation);
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role
      },
    };

    jwt.sign(
      payload,
      req.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) {
          console.error('JWT sign error:', err);
          throw err;
        }
        console.log('Token generated');
        return res.json({ token });
      }
    );
  } catch (error) {
    console.error('Server error:', error.message);
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id,
        role: user.role
      },
    };

    jwt.sign(
      payload,
      req.JWT_SECRET,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.error('Server error:', error.message);
    res.status(500).send('Server error');
  }
};
