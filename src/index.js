// src/index.js
const express = require("express");
const app = express();
const routes = require("./routes");

// Parse JSON request bodies
app.use(express.json());

// Port on which the server listens
const port = 3003;

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// Welcome route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the main page" });
});

// Routes
app.use("/", routes);
