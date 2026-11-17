const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function conectar() {
  return open({
    filename: './database/tarefas.db',
    driver: sqlite3.Database
  });
}

module.exports = conectar;
