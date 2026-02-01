const express = require('express');
const env = require("./example.env");
const connectDB = require("./db/db")
const app = express();


app.get("/", (req, res) => {
    res.send("Hello World");
});

// connectDB
connectDB();

app.listen(env.PORT, () => {
    console.log(`Server is running on port ${env.PORT}`)
});