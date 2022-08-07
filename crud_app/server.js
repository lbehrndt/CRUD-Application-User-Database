const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

dotenv.config({ path: "crud_app/views/config.env" });
const PORT = process.env.PORT || 8080;

// log request
app.use(morgan("tiny"));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine to ejs
app.set("view engine", "ejs");

// load assets
app.use(
  "/css", express.static(path.resolve(__dirname, "assets/css"))
);
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

// select routes
app.use("/", require("./server/routes/router"));

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});