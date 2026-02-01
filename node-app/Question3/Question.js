const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 4000;

app.get("/download", (req, res) => {
    const filePath = path.join(__dirname, "big.txt");

    if(!fs.existsSync(filePath)){
        return res.status(404).send("File not found");
    }

    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Disposition", 'attachment; filename="big.txt');

    const readStream = fs.createReadStream(filePath);

    readStream.on("error", (err) => {
        console.error("Stream error:", err);
        res.status(500).send("Stream error");
    });

    readStream.pipe(res);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});