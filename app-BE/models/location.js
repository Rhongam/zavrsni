const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    position: {
        type: [Number],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    measurementData: {
        date: {
            type: [String],
            required: false
        },
        temperature: {
            type: [Number],
            required: false
        },
        humidity: {
            type: [Number],
            required: false
        },
        co2: {
            type: [Number],
            required: false
        }
    }
})

module.exports = mongoose.model("Location", locationSchema);