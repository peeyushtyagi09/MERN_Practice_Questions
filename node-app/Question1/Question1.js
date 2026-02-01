const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.get("/read", (req, res) => {
  const filePath = path.join(__dirname, "data.txt");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      if (err.code === "ENOENT") {
        return res.status(404).send("File not found");
      }

      return res.status(500).send("Internal Server Error");
    }

    res.type("text/plain");
    res.send(data);
  });
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
