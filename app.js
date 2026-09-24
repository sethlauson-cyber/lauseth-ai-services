const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve the frontend
app.use(express.static(path.join(__dirname)));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// API test
app.get("/api/status", (req, res) => {
  res.json({
    message: "LauSeth AI Services API is running",
    status: "online"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
