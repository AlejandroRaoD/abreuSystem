const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '12345', 
  database: 'abreuSystem' 
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectarse a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos como ID', connection.threadId);
});


connection.query('SELECT 1 + 1 AS solution', (error, results) => {
  if (error) throw error;
  console.log('La solución es: ', results[0].solution);
});


connection.end();
