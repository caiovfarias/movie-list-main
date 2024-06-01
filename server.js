const express = require('express');
const pg = require('pg');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuração do PostgreSQL
const config = {
  user: "avnadmin",
  password: "AVNS__sdnuMYOKMeLOEgEc_z",
  host: "pg-256b0a50-movie-list-fiap-db.e.aivencloud.com",
  port: 18567,
  database: "login",
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./ca.pem").toString(),
  },
};

// Verificação do conteúdo do certificado CA
console.log("Certificado CA:", config.ssl.ca);

const client = new pg.Client(config);

// Conexão com o PostgreSQL
client.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão com o banco de dados PostgreSQL bem-sucedida!');
});

// Middleware para analisar corpos de solicitação JSON
app.use(bodyParser.json());

// Rota de autenticação
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Tentativa de login:', { email, password });
  
  // Consulta preparada para evitar injeção de SQL
  client.query('SELECT * FROM usuarios WHERE email = $1', [email], (error, results) => {
    if (error) {
      console.error('Erro na consulta ao banco de dados:', error);
      res.status(500).json({ success: false, error: 'Erro interno do servidor' });
    } else if (results.rows.length > 0) {
      const user = results.rows[0];
      console.log('Usuário encontrado:', user);
      
      // Comparação direta de senhas (não segura)
      if (password === user.senha) { // Corrigido para user.senha
        console.log('Credenciais válidas para o usuário:', user);
        res.status(200).json({ success: true, user });
      } else {
        console.log('Senha incorreta para o usuário:', user);
        res.status(401).json({ success: false, error: 'Credenciais inválidas' });
      }
    } else {
      console.log('Usuário não encontrado com o email:', email);
      res.status(401).json({ success: false, error: 'Credenciais inválidas' });
    }
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor está ouvindo na porta ${PORT}`);
});
