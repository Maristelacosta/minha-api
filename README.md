# 🚀 Minha API

API REST de gerenciamento de tarefas desenvolvida com Node.js e Express.

## 📋 Funcionalidades

- Criar tarefas
- Listar tarefas
- Atualizar tarefas
- Excluir tarefas
- API RESTful
- Integração futura com SQLite

## 🛠️ Tecnologias

- Node.js
- Express
- Git
- GitHub
- SQLite (em desenvolvimento)

## 📂 Estrutura do Projeto

```text
minha-api
│
├── database
├── src
│   └── app.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/Maristelacosta/minha-api.git
```

Entre na pasta:

```bash
cd minha-api
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

## 🌐 Rotas da API

### Página Inicial

```http
GET /
```

Resposta:

```json
{
  "mensagem": "API funcionando!"
}
```

### Listar tarefas

```http
GET /tarefas
```

### Criar tarefa

```http
POST /tarefas
```

Body:

```json
{
  "titulo": "Estudar Node.js"
}
```

### Atualizar tarefa

```http
PUT /tarefas/:id
```

### Excluir tarefa

```http
DELETE /tarefas/:id
```

## 📸 Exemplo

```json
[
  {
    "id": 1,
    "titulo": "Estudar SQLite"
  }
]
```

## 👩‍💻 Autora

**Maristela Costa**

Projeto desenvolvido para aprendizado de Node.js, Express, Git e GitHub.

## 📄 Licença

Este projeto é livre para fins de estudo.
