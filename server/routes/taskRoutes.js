const express = require('express');
const router = express.Router();

// In-memory fake DB (you'll replace this with a real DB later)
let tasks = [
  { id: 1, title: 'Learn Express routes', done: false },
  { id: 2, title: 'Build To-Do App', done: true }
];

// ✅ GET all tasks
router.get('/', (req, res) => {
  res.json(tasks);
});

// ✅ POST a new task
router.post('/', (req, res) => {
  const { title } = req.body;
  const newTask = { id: Date.now(), title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// ✅ PUT (update) task
router.put('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, done } = req.body;

  tasks = tasks.map(task =>
    task.id === taskId ? { ...task, title, done } : task
  );

  res.json({ message: 'Task updated' });
});

// ✅ DELETE task
router.delete('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  tasks = tasks.filter(task => task.id !== taskId);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
