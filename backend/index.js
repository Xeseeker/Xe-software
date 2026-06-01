const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/status", (req, res) => {
  res.json({
    status: "Backend is running",
    timestamp: new Date().toISOString(),
    message: "Connected to Next.js Frontend successfully",
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from Backend!",
    time: new Date().toLocaleTimeString(),
  });
});

// Health check
app.get("/health", (req, res) => {
  res.json({ health: "ok" });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
  console.log(`Frontend should connect to: http://localhost:${PORT}`);
});
