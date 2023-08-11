// src/index.js
const express = require("express");
const app = express();
const routes = require("./routes");
const cors = require("cors");

// Parse JSON request bodies
app.use(express.json());

app.use(cors());

// Port on which the server listens
const port = 3004;

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Welcome route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the main page of Tribal Gaming API" });
});

// Routes
app.use("/", routes);
