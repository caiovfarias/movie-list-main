const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu-usuario',
  password: 'sua-senha',
  database: 'nome-do-banco-de-dados'
});

module.exports = connection;