require("dotenv").config();
const mongoose = require ("mongoose");

const connectDB = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.xgjjx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`)
};

module.exports = {
    connectDB
}

