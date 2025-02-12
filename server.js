const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow cross-origin requests (useful if frontend & backend are separate)
app.use(express.json()); // Parse JSON request bodies

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// Base Route (Landing Page)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API Route Example (Placeholder for Future)
app.get("/api/status", (req, res) => {
  res.json({ message: "Server is running!", status: "OK" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
