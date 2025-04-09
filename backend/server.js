const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
require('dotenv').config();
const buttonRoutes = require('./routes/buttonRoutes');

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.log("Error connecting to MongoDB:", error);
});

// Use routes without prefix (i.e., "/", "/:id", etc.)
app.use('/', buttonRoutes);

// Simple health check route
app.get("/ping", (req, res) => {
  res.json({ message: "Pong! Server is running." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
