const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const locationsRoute = require("./routes/locations");
const http = require('http');

const app = express();

mongoose.connect("mongodb://localhost:27017/aqc");
const db = mongoose.connection;
db.on("error", (error) => console.error(error))
db.once("open", () => console.log('Connected to database!'));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use("/locations", locationsRoute);

app.get("/", (req, res) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3030/");
})

http.createServer(app).listen((3030), () => {
    console.log("Server is running on port 3030!")
})