const express = require("express");
const router = express.Router();
const location = require("../models/location");
const newDataArray = require("../data/locations");

router.get("/", async (req, res) => {
    // await newDataArray.forEach(dataSet => location.create(dataSet));
    const data = await location.find();
    const responseObject = [];
    data.forEach(obj => {
        responseObject.push({
            id: obj.id,
            name: obj.name,
            position: obj.position,
            description: obj.description,
            type: obj.type,
            url: obj.url,
            measurementData: obj.measurementData
        })
    })
    res.json(responseObject)
});

module.exports = router;