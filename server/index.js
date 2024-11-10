// server/index.js
const express = require("express");
const app = express();
const mysql = require("mysql");
const estudiantesRoutes = require("./routes/estudiantes"); // Importa la ruta de estudiantes

// Configuración en el middleware para procesar JSON
app.use(express.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "abreuSystem"
});

// Conexión a la base de datos
db.connect((err) => {
    if (err) {
        console.error("Error al conectar a la base de datos:", err);
        return;
    }
    console.log("Conexión a la base de datos MySQL exitosa.");
});


// Ruta para crear algo en la base de datos (por ahora solo muestra que recibe datos)
app.post("/create", (req, res) => {
    const nombreEmp = req.body.nombreEmp;
    const apellidoEmp = req.body.apellidoEmp;
    const ciEmp = req.body.ciEmp;
    const generoEmp = req.body.generoEmp;
    const tlfEmpl = req.body.tlfEmpl;
    const DireccionEmp = req.body.DireccionEmp;
    const CorreoEmp = req.body.CorreoEmp;

    db.query('INSERT INTO empleados(Nombre,Apellido,C_I,Genero,telefono,Direccion,Correo) VALUES(?,?,?,?,?,?,?)', [Nombre,Apellido,C_I,Genero,telefono,Direccion,Correo],
        (err,result)=>{
            if (err){
                console.log(err);
            }else{
                res.send("Empleado registrado");
            }
        }
    );
});

// Endpoint para obtener estudiantes
app.get("/api/estudiantes", (req, res) => {
    const query = "SELECT * FROM ESTUDIANTES";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error al obtener estudiantes:", err);
            return res.status(500).json({ error: "Error al obtener estudiantes" });
        }
        res.json(results);
    });
});

// Endpoint para obtener bienes
app.get("/api/bienes", (req, res) => {
    const query = "SELECT * FROM OTROSBIENES";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error al obtener bienes:", err);
            return res.status(500).json({ error: "Error al obtener bienes" });
        }
        res.json(results);
    });
});

// Endpoint para obtener empleados
app.get("/api/empleados", (req, res) => {
    const query = "SELECT * FROM EMPLEADOS";
    db.query(query, (err, results) => {
        if (err) {
            console.error("Error al obtener empleados:", err);
            return res.status(500).json({ error: "Error al obtener empleados" });
        }
        res.json(results);
    });
});

// Endpoint para registrar estudiantes (nueva ruta)
app.use("/api/estudiantes", estudiantesRoutes);

// Configurar el puerto y arrancar el servidor
app.listen(3001, () => {
    console.log("Servidor corriendo en http://localhost:3001");
});
