const mongoose = require ("mongoose");

const movieObject = {
    title: {
        type: String,
        required: true,
        unique: true,
    },
    year: {
        type: Number,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
    },
    rate: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
    },
    poster: {
        type: String,
        required: true,
        unique: true,
    }
}

const MovieSchema = new mongoose.Schema(movieObject);

const movie = mongoose.model("Movie", MovieSchema);

module.exports = movie