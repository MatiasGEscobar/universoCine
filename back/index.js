const {connectDB} = require ("./src/config/dbConfig");
const {app} = require ("./src/server");

const serverOn = async () => {
    try {
        await connectDB();
        console.log("conexion a la base de datos establecida");
        app.listen(3000, () => {
            console.log("servidor escuchando en el puerto 3000");
        })
    } catch (error) {
    console.log(error);
}
}

serverOn();