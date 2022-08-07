const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const app = express();

dotenv.config({path: "crud_app/views/config.env"})
const PORT = process.env.PORT || 8080; 

// log request
app.use(morgan("tiny"));

app.get("/", (req, res) => (
    res.send("CRUD Application")
))

app.listen(3000, () => {console.log(`Server is running on http://localhost:${PORT}`)});