const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

// MongoDB connection string
const uri = "mongodb+srv://sharmakrrish50:4FMvuCK0OQUv5k39@helphand.vqqsyc9.mongodb.net/helphand?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Initialize models
require('./models/Application');
require('./models/JobPost');
require('./models/Organisation');
require('./models/User');
require('./models/Volunteer');

// Middleware
app.use(cors({ origin: '*' })); // Ensure CORS is enabled
app.use(express.json());

// Define the JWT secret key
const JWT_SECRET = 'your_jwt_secret';

// Import routes
const authRoutes = require('./routes/auth');
const applicationRoutes = require('./routes/applications');
const jobPostRoutes = require('./routes/jobPosts');
const organisationRoutes = require('./routes/organisations');
const volunteerRoutes = require('./routes/volunteers');
const userRoutes = require('./routes/user');

// Use routes
app.use('/api/auth', (req, res, next) => {
  req.JWT_SECRET = JWT_SECRET;
  next();
}, authRoutes);

app.use('/api/applications', applicationRoutes);
app.use('/api/jobPosts', jobPostRoutes);
app.use('/api/organisations', organisationRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/user', userRoutes);

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
