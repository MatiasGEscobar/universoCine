const connectDB = require ("./src/config/dbConfig.js");
const app = require ("./src/server.js");


const serverOnline = async() => {
    try {
        await connectDB()
        console.log("Conexión a la base de datos establecida");
        app.listen(3000, () => {
        console.log("Server corriendo en puerto 3000");
    })
    } catch (error) {
        console.log(error);
    }
}

serverOnline();
