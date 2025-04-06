const express = require('express');
const router = express.Router();



router.get('/folder', (req, res) => {
  
});

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
