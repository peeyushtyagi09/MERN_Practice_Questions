const express = require("express");
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    console.log("go go");
})

app.listen(3000, () => {
    console.log("server is running")
});