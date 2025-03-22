const express = require('express');
const cors = require('cors');
const { testConnection } = require('./config/db.config');
const clientRoutes = require('./routes/client.routes');
const meetingRoutes = require('./routes/meeting.routes')
require('dotenv').config({ path: require('path').resolve(__dirname, './.env') });

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Test database connection on startup
testConnection();

// Middleware
app.use(cors());  // Enable CORS for Angular frontend
app.use(express.json());  // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies

// Simple logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


// Routes
app.use('/api/client', clientRoutes);
app.use('/api/meeting', meetingRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Angular-MySQL API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
