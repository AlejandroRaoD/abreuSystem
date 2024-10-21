// server.js
const express = require('express');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/ejemplo', (req, res) => {
    db.query('SELECT * FROM EMPLEADOS', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});