const mongoose = require('mongoose');

// MongoDB connection URI (using a local MongoDB instance)
const MONGODB_URI = 'mongodb+srv://madhukiraninaparthi2001:madhu@cluster0.j9kst.mongodb.net/';

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
