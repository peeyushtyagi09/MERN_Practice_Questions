const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 4000;

app.use(express.json());

app.post("/save", (req, res) => {
    const { text } = req.body;

    if(!text) {
        return res.status(400).send("Text is required");
    }

    const filePath = path.join(__dirname, "output.txt");

    fs.writeFile(filePath, text, "utf8", (err) => {
        if(err) {
            console.error("File write error:", err);
            return res.status(500).send("Failed to write File");
        }

        res.json({ message: "File saved successfully"});
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });