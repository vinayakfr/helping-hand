require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const authRoutes = require('./routes/auth');
const applicationRoutes = require('./routes/applications');
const jobPostRoutes = require('./routes/jobPosts');
const organisationRoutes = require('./routes/organisations');
const volunteerRoutes = require('./routes/volunteers');
const userRoutes = require('./routes/user');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/jobPosts', jobPostRoutes);
app.use('/api/organisations', organisationRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/user', userRoutes);

// Connect to MongoDB
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('MONGO_URI is not defined in the environment variables');
  process.exit(1); // Exit the process with an error code
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
