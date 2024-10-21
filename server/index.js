const express = require("express");
const app = express();
const mysql = require("mysql");

// Configuracion en el middleware para procesar JSON
app.use(express.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "abreus"
});

// Conexion a la base de datos
db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conexión a la base de datos MySQL exitosa.");
});

// Ruta de prueba para verificar la conexión
app.get("/", (req, res) => {
    res.send("¡Servidor y base de datos están corriendo!");
});

// Ruta para crear algo en la base de datos (por ahora solo muestra que recibe datos)
app.post("/create", (req, res) => {
    const nombre = req.body.nombre;
    console.log(`Nombre recibido: ${nombre}`);
    res.send(`Nombre recibido: ${nombre}`);
});

// Configurar el puerto y arrancar el servidor
app.listen(3001, () => {
    console.log("Servidor corriendo en http://localhost:3001");
});