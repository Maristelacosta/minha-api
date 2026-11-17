const conectar = require('./db');

async function criarTabela() {
  const db = await conectar();

  await db.exec(`
    CREATE TABLE IF NOT EXISTS tarefas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL
    )
  `);

  console.log('Tabela criada!');
}

criarTabela();
