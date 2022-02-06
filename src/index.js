const express = require("express");
const helmet = require("helmet");
const app = express();

// piece of middleware that "throws" the info from the folder you put down below and it goes at static format
app.use(express.static('public'));

// using body-parser, its a built-in middleware to parse incoming requests with json payloads.
app.use(express.json())

// identical to express.json() but the type its application/x-www-form-urlencoded instead of json
// important to remember that most api request libs send data into this format, like ajax, and to reach the information returned by the ajax request we need to use this property.
app.use(express.urlencoded({
    extended: false
}));

// npm lib focused on security, it helps you secure your Express apps by setting various HTTP headers -> https://www.npmjs.com/package/helmet
app.use(helmet());

app.all("*", (req, res) => {
    res.send("<h1>Testing</h1>");
});

app.listen(3000, () => (console.log("Server is running at port 3000")));