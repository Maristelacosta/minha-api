const express = require('express');

const app = express();

app.use(express.json());

app.use(express.json());

// Página inicial
app.get('/', (req, res) => {
  res.json({
    mensagem: 'API funcionando!'
  });
});

// Listar tarefas
app.get('/tarefas', (req, res) => {
  res.json(tarefas);
});

// Criar tarefa
app.post('/tarefas', (req, res) => {
  const { titulo } = req.body;

  const novaTarefa = {
    id: tarefas.length + 1,
    titulo
  };

  tarefas.push(novaTarefa);

  tarefas.push(...)
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
