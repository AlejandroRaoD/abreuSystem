// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', // Cambia si es necesario
    user: 'root', // Tu usuario de MySQL
    password: '12345', // Tu contraseña de MySQL
    database: 'abreuSystem'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err.stack);
        return;
    }
    console.log('Conectado a la base de datos como ID', connection.threadId);
});

module.exports = connection;
