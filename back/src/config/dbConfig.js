const mongoose = require ("mongoose");
require("dotenv").config();


const connectDB = async() => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.xgjjx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=${process.env.DB_CLUSTER}`);
        console.log('MongoDB conectado');
    } catch (error) {
        console.error('Error de conexión:', error);
        process.exit(1);
    }
};

module.exports = connectDB;

