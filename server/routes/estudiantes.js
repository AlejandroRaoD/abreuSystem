const express = require("express");
const app = express();
const mysql = require("mysql");
const estudiantesRoutes = require("./routes/estudiantes"); // Importa la ruta de estudiantes

// Configuración del middleware para procesar JSON
app.use(express.json());

// Configura la conexión a la base de datos
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "abreuSystem"
});

db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conexión a la base de datos MySQL exitosa.");
});

// Usa la ruta de estudiantes
app.use("/api/estudiantes", estudiantesRoutes);

app.listen(3001, () => {
    console.log("Servidor corriendo en http://localhost:3001");
});
