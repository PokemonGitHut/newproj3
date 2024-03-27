// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const todo = req.body.todo;
    todos.push(todo);
    res.json({ message: 'Todo added successfully', todo });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
