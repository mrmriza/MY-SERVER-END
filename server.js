const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Example POST endpoint
app.post("/api/data", (req, res) => {
  console.log("Received data:", req.body);
  res.json({ success: true, message: "Data received." });
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
