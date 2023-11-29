const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todosController');

// Get all todos
router.get('/', todosController.getAllTodos);

// Get one todo
router.get('/:id', todosController.getTodoByIdMiddleware, todosController.getTodoById);

// Create a todo
router.post('/', todosController.createTodo);

// Update a todo
router.patch('/:id', todosController.getTodoByIdMiddleware, todosController.updateTodo);

// Delete a todo
router.delete('/:id', todosController.getTodoByIdMiddleware, todosController.deleteTodo);

module.exports = router;
