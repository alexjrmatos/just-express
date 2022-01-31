const express = require("express");
const app = express();

app.all("*", (req, res) => {
    res.send("<h1>Testing</h1>");
});

app.listen(3000, () => (console.log("Server is running at port 3000")));