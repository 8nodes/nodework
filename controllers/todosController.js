const Todo = require('../models/Todo');

//get the todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ startTime: -1 });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//get a single todo by Id
exports.getTodoById = async (req, res) => {
  res.json(res.todo);
};


//create a todo
exports.createTodo = async (req, res) => {
  const todo = new Todo({
    title: req.body.title,
    description: req.body.description,
    steps: req.body.steps || [],
    completed: req.body.completed || false,
  });

  try {
    const newTodo = await todo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//update a todo
exports.updateTodo = async (req, res) => {
  if (req.body.title != null) {
    res.todo.title = req.body.title;
  }
  if (req.body.description != null) {
    res.todo.description = req.body.description;
  }
  if (req.body.steps != null) {
    res.todo.steps = req.body.steps;
  }
  if (req.body.completed != null) {
    res.todo.completed = req.body.completed;
  }

  try {
    const updatedTodo = await res.todo.save();
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
//delete a to do
exports.deleteTodo = async (req, res) => {
  try {
    await res.todo.deleteOne();
    res.json({ message: 'Todo deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTodoByIdMiddleware = async (req, res, next) => {
  let todo;
  try {
    todo = await Todo.findById(req.params.id);
    if (todo == null) {
      return res.status(404).json({ message: 'Todo not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.todo = todo;
  next();
};