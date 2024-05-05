const { Client } = require("pg");

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'backup1_05',
  password: 'jean3480',
  port: 5432,
});

// Conectar el cliente una vez al inicio
client.connect()
  .then(() => console.log('ConexiÃ³n exitosa'))
  .catch(err => console.error('Error al conectar:', err));

module.exports = {
  client, // Exporta el cliente PostgreSQL conectado
};