var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

var path = require("path");

var port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
mongoose.connect("mongodb://localhost:27017/hostel", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.get("/", (req, res) => res.send("Server running!"));

var mark = require("./routes/Mark");
app.use("/mark", mark);

var check = require("./routes/Check");
app.use("/check", check);

var register = require("./routes/Register");
app.use("/register", register);

app.listen(port, () => {
  console.log("Server started on: " + port);
});

module.exports = app;
